import { INote } from "../typings/data";
import { generateGUID } from "./helpers";

export class NoteDocumentStore {
    constructor(private index: any) {}

    get data(): Record<string, INote> {
        return this.index.documentStore.toJSON()?.docs;
    }

    toJSON() {
        return this.index;
    }

    hasDoc(id: string) {
        return this.index.documentStore.hasDoc(id);
    }

    addDoc({title, body}: {
        title: string;
        body: string;
    }) {

        let id = generateGUID();
        while(this.hasDoc(id)) {
            id = generateGUID();
        }

        const newNote: INote = {
            title,
            body,
            createdAt: Number(new Date()),
            updatedAt: Number(new Date()),
            id
        };

        this.index.addDoc(newNote);
    }

    removeDoc(id) {
        if(this.hasDoc(id)) {
            this.index.documentStore.removeDoc(id);
        }
    }

    load(jsonIndex: any) {
        this.index = this.index.constructor.load(jsonIndex);
    }
}