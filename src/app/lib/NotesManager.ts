import { IFile, INote } from '../typings/data';
import { NoteDocumentStore } from './DocumentStore';
import { generateGUID } from './helpers';

var fs = require('fs');
var path = require('path');
var elasticlunr = require('elasticlunr');

var globalNoteDocumentStore = new NoteDocumentStore(
    elasticlunr(function () {
        this.setRef('id');
        this.addField('title');
        this.addField('body');
        this.addField('createdAt');
    })
);

var noteDocumentStore = new NoteDocumentStore(
    elasticlunr(function () {
        this.setRef('id');
        this.addField('title');
        this.addField('body');
        this.addField('createdAt');
    })
);

//@ts-ignore
window.noteDocumentStore = noteDocumentStore
//@ts-ignore
window.elasticlunr = elasticlunr;
const FILE = path.join(__dirname, '../../file.example.json');

export interface INotesManager {
    globalNotes: Record<string, INote>;
    notes: Record<string, INote>;
}

export class NotesManager {
    constructor(readonly data: INotesManager) {}

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
            globalNoteDocumentStore.addDoc({ title, body });
            return new NotesManager({
                ...this.data,
                globalNotes: globalNoteDocumentStore.data,
            });
        } else {
            noteDocumentStore.addDoc({ title, body });
            return new NotesManager({
                ...this.data,
                notes: noteDocumentStore.data,
            });
        }
    }

    delete(id: string) {
        if (globalNoteDocumentStore.hasDoc(id)) {
            globalNoteDocumentStore.removeDoc(id);
            return new NotesManager({
                ...this.data,
                globalNotes: globalNoteDocumentStore.data,
            });
        } else if (noteDocumentStore.hasDoc(id)) {
            noteDocumentStore.removeDoc(id);
            return new NotesManager({
                ...this.data,
                notes: noteDocumentStore.data,
            });
        }
    }

    load() {
        try {
            const text: string = fs.readFileSync(FILE, 'utf8');
            const { notes, globalNotes } = JSON.parse(text);
            globalNoteDocumentStore.load(globalNotes);
            noteDocumentStore.load(notes);
            return new NotesManager({
                globalNotes: globalNoteDocumentStore.data,
                notes: noteDocumentStore.data,
            });
        } catch (err) {
            console.warn(err);
            return new NotesManager({
                globalNotes: {},
                notes: {},
            });
        }
    }

    async save(): Promise<boolean> {
        const error = await new Promise((resolve) =>
            fs.writeFile(
                FILE,
                JSON.stringify({
                    notes: noteDocumentStore.toJSON(),
                    globalNotes: globalNoteDocumentStore.toJSON(),
                }),
                resolve
            )
        );
        if (error) {
            console.warn('could not save!');
            return false;
        }
        return true;
    }
}
