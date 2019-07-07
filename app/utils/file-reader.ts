import * as fs from "fs";
import * as path from "path";

export class FileReader {

    public static get(fileName: string): Promise<string> {

        const baseDataPath = process.env.DATA_PATH;

        return new Promise((resolve, reject) => {
            fs.readFile(path.join(__dirname, `${baseDataPath}/${fileName}`), (err, data) => {
                // TODO : Move to error handler
                if (err) return reject(err);

                return resolve(data.toString());
            });
        });
    }

}