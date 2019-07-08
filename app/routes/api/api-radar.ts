import { Request, Response, Router } from 'express';
import { BaseRoute } from '../router';
import { Main } from "../../core/main";
import { FileReader } from "../../utils/file-reader";

export class ApiRadar extends BaseRoute {

    constructor() {
        super();
    }

    public static create(router: Router): void {
        router.get('/api/radar/data', (req: Request, res: Response) => {
            new ApiRadar().getRadarData(req, res);
        });

        router.get('/api/radar/detect-invaders', (req: Request, res: Response) => {
            new ApiRadar().detectInvaders(req, res);
        });
    }

    public getRadarData(req: Request, res: Response): Promise<any> {
        return FileReader.get('radar.txt')
            .then((data) => {
                const dataArray = data.toString().split('\n');
                this.send(req, res, dataArray);
            })
            .catch(() => {
                res.status(500).send('Unable to get data from file')
            });
    }

    public detectInvaders(req: Request, res: Response): void {
        Main.init((report) => {
            this.send(req, res, report);
        });
    }
}