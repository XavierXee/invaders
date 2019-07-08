import { Request, Response, Router } from "express";
import { BaseRoute } from "../router";

export class IndexRoute extends BaseRoute {

    constructor() {
        super();
    }

    public static create(router: Router): void {
        router.get("/", (req: Request, res: Response) => {
            new IndexRoute().index(req, res);
        });
    }

    public index(req: Request, res: Response): void {
        this.title = "Space Invaders Detector";
        this.render(req, res, "index");
    }

}