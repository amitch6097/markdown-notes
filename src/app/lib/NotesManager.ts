import { IFile, INote } from '../typings/data';
import { DocumentStore, SerialisedDocumentStore } from './DocumentStore';
import { generateGUID } from './helpers';
export function createNoteDocumentStore() {
    return new DocumentStore<INote>(['title', 'body', 'isGlobal']);
}
export interface INotesManager {
    globalNotes: DocumentStore<INote>;
    notes: DocumentStore<INote>;
}

export class NotesManager {
    constructor(readonly data: INotesManager) {}

    get state(): {
        globalNotes: Record<string, INote>;
        dateNotes: Record<
            string,
            {
                date: number;
                notes: INote[]; // notes should be ordered by now
            }
        >;
    } {
        const notes = this.data.notes.data;
        const dateNotes = notes
            ? Object.keys(notes).reduce((temp, key) => {
                  const note = notes[key];
                  temp[String(note.updatedAt)] = temp[note.updatedAt] || {
                      date: note.updatedAt,
                      notes: [],
                  };
                  temp[String(note.updatedAt)].notes.push(note);
                  return temp;
              }, {})
            : {};
        return {
            globalNotes: this.data.globalNotes.data,
            dateNotes,
        };
    }

    async load({
        notes,
        globalNotes,
    }: {
        notes: SerialisedDocumentStore<INote>;
        globalNotes: SerialisedDocumentStore<INote>;
    }) {
        try {
            await this.data.globalNotes.load(globalNotes);
            await this.data.notes.load(notes);
            return new NotesManager({
                ...this.data,
            });
        } catch (err) {
            console.warn(err);
            return this;
        }
    }

    add({
        title,
        body,
        isGlobal,
    }: {
        title: string;
        body: string;
        isGlobal: boolean;
    }) {
        if (isGlobal) {
            this.data.globalNotes.addDoc({ title, body, isGlobal });
            return new NotesManager({
                ...this.data,
            });
        } else {
            this.data.notes.addDoc({ title, body, isGlobal });
            return new NotesManager({
                ...this.data,
            });
        }
    }

    toJSON() {
        return {
            globalNotes: this.data.globalNotes.toJSON(),
            notes: this.data.notes.toJSON(),
        };
    }
}
