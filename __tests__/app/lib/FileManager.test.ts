import 'ts-jest';
const fs = require('fs');
const path = require('path');

import { FileManager } from '../../../src/app/lib/FileManager';

describe('FileManager', () => {
    it('creates a document', async (resolve) => {
        // const content = 'My file content';
        // const filePath = '../../../__mock__/test-file.txt'
        // const localPath = path.join(__dirname, filePath);

        // await FileManager.save(localPath, content);
        // const fileContent = await FileManager.load(localPath);
        // expect(fileContent).toEqual(content);
        // const deleted = await FileManager.delete(localPath);
        // expect(deleted).toEqual(true);
        // const deletedAgain = await FileManager.delete(localPath);
        // expect(deletedAgain).toEqual(false);
        resolve();
    });

});
