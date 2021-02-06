import { generateGUID } from './helpers';
var elasticlunr = require('elasticlunr');

export interface IBaseDocument {
    updatedAt: number;
    createdAt: number;
    id: string;
}

type DocumentData = Omit<IBaseDocument, 'updatedAt' | 'createdAt' | 'id'>;

export interface SerialisedDocumentStore<T> {
    docInfo: {
        [docRef: string]: {
            [field in keyof T]: number;
        };
    };
    docs: {
        [docRef: string]: T;
    };
}

/**
 * DocumentStore
 * This is a wrapper around the elasticlunr library, to add types and maintain 
 * that every document has an id, createdAt, and updatedAt field.
 */
export class DocumentStore<T extends IBaseDocument> {
    index: any; // no types for elasticlunr

    constructor(
        readonly fields: Array<keyof Omit<T, 'updatedAt' | 'createdAt' | 'id'>>
    ) {
        this.index = elasticlunr(function () {
            this.setRef('id');
            this.addField('createdAt');
            this.addField('updatedAt');
            fields.forEach((field) => {
                this.addField(field);
            });
        });
    }

    get data(): Record<string, T> {
        return this.index.documentStore.toJSON()?.docs;
    }

    /**
     * Check if a document exists
     * @param id the id of the document to check exists
     * @returns {boolean} if the document exists or not
     */
    hasDoc(id: string): boolean {
        return this.index.documentStore.hasDoc(id);
    }

    /**
     * @param id the  id of the document to get
     * @returns {T} the template type of the store
     */
    getDoc(id: string): T {
        return this.index.documentStore.getDoc(id);
    }

    /**
     *
     * @param data just the data that you want to add to the document
     * @returns {string} the id of the document created
     */
    addDoc(data: DocumentData): string {
        let id = generateGUID();
        while (this.hasDoc(id)) {
            id = generateGUID();
        }

        const documentData: IBaseDocument = {
            createdAt: Number(new Date()),
            updatedAt: Number(new Date()),
            id,
        };

        this.index.addDoc({
            ...data,
            ...documentData,
        });
        return id;
    }

    /**
     * @param id the id of the document to return
     * @returns {boolean} if the document was removed
     */
    removeDoc(id: string): boolean {
        if (this.hasDoc(id)) {
            this.index.documentStore.removeDoc(id);
            return !Boolean(this.hasDoc(id));
        }
        return false;
    }


    /**
     * updates a document, this will auto update the updatedAt field
     * @param id id of the document to update
     * @param updateDocumentData the data to update, can be only one field of the data
     * @returns {boolean} if the document was found and updated
     */
    updateDoc(id: string, updateDocumentData: Partial<DocumentData>): boolean {
        const document = this.getDoc(id);
        if (!document) {
            // document does not exists so just return false
            return false;
        }
        const documentData: IBaseDocument = {
            ...document,
            updatedAt: Number(new Date()),
        };

        this.index.addDoc({
            ...documentData,
            ...updateDocumentData,
        });
        return true;
    }

    /**
     *
     * @param jsonIndex a json elasticlunr store object
     * @returns {boolean} if the object was properly loaded
     */
    load(jsonIndex: SerialisedDocumentStore<T>): boolean {
        try {
            this.index = this.index.constructor.load(jsonIndex);
            return true;
        } catch (err) {
            console.error(err);
            return false;
        }
    }

    toJSON() {
        return this.index.toJSON();
    }
}
