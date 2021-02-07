const fs = require('fs');

export class FileManager {
    static async load(filePath: string): Promise<string> {
        try {
            const data: string = await new Promise((resolve, reject) =>
                fs.readFile(filePath, 'utf8', (error, data) => {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(data);
                    }
                })
            );
            return data;
        } catch (error) {
            console.warn(error);
            return '';
        }
    }

    /**
     *
     * @param path string file path location
     * @param content string content of file, if it is JSON stringify before saving
     */
    static async save(filePath: string, content: string) {
        await new Promise((resolve) =>
            fs.writeFile(filePath, content, resolve)
        );
    }

    static async delete(filePath: string): Promise<boolean> {
        const error = await new Promise((resolve) =>
            fs.unlink(filePath, resolve)
        );
        if (error) {
            console.warn(error);
            return false;
        } else {
            return true;
        }
    }
}
