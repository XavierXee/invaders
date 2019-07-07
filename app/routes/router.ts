import { NextFunction, Request, Response } from "express";

export class BaseRoute {

  protected title: string;
  private scripts: string[];

  constructor() {
    this.title = "Space Invaders Detector";
    this.scripts = [];
  }

  public render(req: Request, res: Response, view: string, options?: Object) {
    res.locals.BASE_URL = "/";
    res.locals.scripts = this.scripts;
    res.locals.title = this.title;
    res.render(view, options);
  }

  public send(req: Request, res: Response, resource:any, options?: Object) {
    res.locals.BASE_URL = "/";
    res.locals.scripts = this.scripts;
    res.locals.title = this.title;
    res.send(resource);
  }
}