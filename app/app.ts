import * as bodyParser from 'body-parser';
import * as cookieParser from 'cookie-parser';
import * as express from 'express';
import * as path from 'path';
import errorHandler = require('errorhandler');
import methodOverride = require('method-override');

import { IndexRoute } from './routes/static/index';
import { ApiRadar } from './routes/api/api-radar';

require('dotenv').config();

export class App {

  public app: express.Application;

  public static bootstrap(): App {
    return new App();
  }

  constructor() {
    this.app = express();
    this.config();
    this.routes();
  }

  public config() {

    this.app.use(express.static(path.join(__dirname, 'public')));
    this.app.set('views', path.join(__dirname, 'public'));
    this.app.set('view engine', 'html');
    this.app.use(bodyParser.json());

    this.app.use(bodyParser.urlencoded({
      extended: true
    }));

    this.app.use(cookieParser('SECRET_GOES_HERE'));
    this.app.use(methodOverride());

    global.Promise = require('q').Promise;

    this.app.use(function(err: any, req: express.Request, res: express.Response, next: express.NextFunction) {
        err.status = 404;
        next(err);
    });

    this.app.use(errorHandler());

  }

  private routes() {
    let router: express.Router;
    router = express.Router();
    IndexRoute.create(router);
    ApiRadar.create(router);

    this.app.use(router);
  }

}
