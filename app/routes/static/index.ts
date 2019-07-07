import { Request, Response, Router } from "express";
import { BaseRoute } from "../router";

export class IndexRoute extends BaseRoute {

    constructor() {
        super();
    }

    public static create(router: Router) {
        router.get("/", (req: Request, res: Response) => {
            new IndexRoute().index(req, res);
        });
    }

    public index(req: Request, res: Response) {
        this.title = "Space Invaders Detector";
        this.render(req, res, "index");
    }

}