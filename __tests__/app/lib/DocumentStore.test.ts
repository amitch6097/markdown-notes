import 'ts-jest';

import {
    DocumentStore,
    IBaseDocument,
} from '../../../src/app/lib/DocumentStore';

interface MyTestDocumentData {
    title: string;
}

type MyTestDocument = MyTestDocumentData & IBaseDocument;

function createTestStore() {
    return new DocumentStore<MyTestDocument>(['title']);
}

describe('DocumentStore', () => {
    it('creates a document', () => {
        const store = createTestStore();
        const title = 'New document';
        const id = store.addDoc({ title });
        const document = store.getDoc(id);
        expect(document.id).toEqual(id);
        expect(document.title).toEqual(title);
    });

    it('updates a document', () => {
        const store = createTestStore();
        const title = 'New document';
        const updatedTitle = 'Updated Title';
        const id = store.addDoc({ title });
        const document = store.getDoc(id);
        expect(document.title).toEqual(title);
        store.updateDoc(id, {title: updatedTitle});
        const updatedDocument = store.getDoc(id);
        expect(updatedDocument.title).toEqual(updatedTitle);
    });

    it('removes a document', () => {
        const store = createTestStore();
        const title = 'New document';
        const id = store.addDoc({ title });
        expect(store.hasDoc(id)).toEqual(true);
        expect(store.removeDoc(id)).toEqual(true);
        expect(store.hasDoc(id)).toEqual(false);
        expect(store.removeDoc(id)).toEqual(false); // because it does not exist
    });

    it('loads', () => {
        const store = createTestStore();
        
        const title = 'New document';
        const id = store.addDoc({ title });
        expect(store.hasDoc(id)).toEqual(true);

        // now load that document into another store
        const storeTwo = createTestStore();
        expect(storeTwo.load(store.toJSON())).toEqual(true);
        expect(storeTwo.hasDoc(id)).toEqual(true);
    });

    it('gracefully fails to load', () => {
        const store = createTestStore();
        const badData: any = 'BAD DATA';
        expect(store.load(badData)).toEqual(false);
    });
});
