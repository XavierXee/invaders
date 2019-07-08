import * as fs from "fs";
import * as path from "path";

export class FileReader {

    public static get(fileName: string): Promise<string> {

        const baseDataPath = process.env.DATA_PATH;

        return new Promise((resolve: any, reject: any) => {
            fs.readFile(path.join(__dirname, `${baseDataPath}/${fileName}`), (err, data) => {
                if (err) return reject('File not found');

                return resolve(data.toString());
            });
        });
    }

}