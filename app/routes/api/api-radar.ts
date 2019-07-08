import { Request, Response, Router } from 'express';
import { BaseRoute } from '../router';
import { Main } from "../../core/main";

export class ApiRadar extends BaseRoute {

    private main: Main;

    constructor(mainInstance: Main) {
        super();
        this.main = mainInstance;
    }

    public static create(router: Router, mainInstance): void {
        router.get('/api/radar/data', (req: Request, res: Response) => {
            new ApiRadar(mainInstance).getRadarData(req, res);
        });

        router.get('/api/radar/detect-invaders', (req: Request, res: Response) => {
            new ApiRadar(mainInstance).detectInvaders(req, res);
        });
    }

    public getRadarData(req: Request, res: Response): void {
        this.send(req, res, this.main.getRadarData());
    }

    public detectInvaders(req: Request, res: Response): void {
        this.send(req, res, this.main.getDetection());
    }
}