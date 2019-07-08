import { Request, Response } from "express";

export class BaseRoute {

  protected title: string;
  private scripts: string[];

  constructor() {
    this.title = "Space Invaders Detector";
    this.scripts = [];
  }

  public render(req: Request, res: Response, view: string): void {
    res.locals.BASE_URL = "/";
    res.locals.scripts = this.scripts;
    res.locals.title = this.title;
    res.render(view);
  }

  public send(req: Request, res: Response, resource:any): void {
    res.locals.BASE_URL = "/";
    res.locals.scripts = this.scripts;
    res.locals.title = this.title;
    res.send(resource);
  }
}