import { IFile, INote } from '../typings/data';
import { DocumentStore, SerialisedDocumentStore } from './DocumentStore';
import { generateGUID, removeHours } from './helpers';
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
                  const time = removeHours(note.updatedAt);
                  temp[String(time)] = temp[time] || {
                      date: note.updatedAt,
                      notes: [],
                  };
                  temp[String(time)].notes.push(note);
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

    add(data: { title: string; body: string; isGlobal: boolean }) {
        const partialData = {
            title: data.title,
            body: data.body,
            isGlobal: data.isGlobal,
        };
        if (data.isGlobal) {
            this.data.globalNotes.addDoc(partialData);
            return new NotesManager({
                ...this.data,
            });
        } else {
            this.data.notes.addDoc(partialData);
            return new NotesManager({
                ...this.data,
            });
        }
    }

    update(data: {
        id: string;
        title: string;
        body: string;
        isGlobal: boolean;
    }) {
        const wasGlobal = Boolean(this.data.globalNotes.hasDoc(data.id));
        const partialData = {
            title: data.title,
            body: data.body,
            isGlobal: data.isGlobal,
        };
        if (wasGlobal !== data.isGlobal) {
            const oldDoc = wasGlobal
                ? this.data.globalNotes.getDoc(data.id)
                : this.data.notes.getDoc(data.id);

            /**
             * Remove from the other store
             */
            wasGlobal
                ? this.data.globalNotes.removeDoc(data.id)
                : this.data.notes.removeDoc(data.id);
            /**
             * We want to keep around the createdAt Time
             */
            data.isGlobal
                ? this.data.globalNotes.addDoc({
                      ...partialData,
                      createdAt: oldDoc.createdAt,
                  })
                : this.data.notes.addDoc({
                      ...partialData,
                      createdAt: oldDoc.createdAt,
                  });
        } else {
            data.isGlobal
                ? this.data.globalNotes.updateDoc(data.id, partialData)
                : this.data.notes.updateDoc(data.id, partialData);
        }
        return new NotesManager({
            ...this.data,
        });
    }

    toJSON() {
        return {
            globalNotes: this.data.globalNotes.toJSON(),
            notes: this.data.notes.toJSON(),
        };
    }
}
