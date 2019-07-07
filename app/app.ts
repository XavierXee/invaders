import * as bodyParser from 'body-parser';
import * as cookieParser from 'cookie-parser';
import * as express from 'express';
import * as path from 'path';
import errorHandler = require('errorhandler');
import methodOverride = require('method-override');

//.env config
require('dotenv').config();

//routes
import { IndexRoute } from './routes/static/index';
import { ApiRadar } from './routes/api/api-radar';

/**
 * The server.
 *
 * @class Server
 */
export class App {

  public app: express.Application;

  /**
   * Bootstrap the application.
   *
   * @class Server
   * @method bootstrap
   * @static
   * @return {ng.auto.IInjectorService} Returns the newly created injector for this app.
   */
  public static bootstrap(): App {
    return new App();
  }

  /**
   * Constructor.
   *
   * @class Server
   * @constructor
   */
  constructor() {

    //create expressjs application
    this.app = express();

    //configure application
    this.config();

    //add routes
    this.routes();
  }

  /**
   * Configure application
   *
   * @class Server
   * @method config
   */
  public config() {

    //add static paths
    this.app.use(express.static(path.join(__dirname, 'public')));
    
    // this.app.set('views', path.join(__dirname, 'views'));
    // this.app.set('view engine', 'pug');

    this.app.set('views', path.join(__dirname, 'public'));
    this.app.set('view engine', 'html');

    //mount logger
    //this.app.use(logger('dev'));

    //mount json form parser
    this.app.use(bodyParser.json());

    //mount query string parser
    this.app.use(bodyParser.urlencoded({
      extended: true
    }));

    //mount cookie parker
    this.app.use(cookieParser('SECRET_GOES_HERE'));

    //mount override
    this.app.use(methodOverride());

    //use q promises
    global.Promise = require('q').Promise;

    // catch 404 and forward to error handler
    this.app.use(function(err: any, req: express.Request, res: express.Response, next: express.NextFunction) {
        err.status = 404;
        next(err);
    });

    //error handling
    this.app.use(errorHandler());

  }

  /**
   * Create and return Router.
   *
   * @class Server
   * @method config
   * @return void
   */
  private routes() {
    let router: express.Router;
    router = express.Router();
    IndexRoute.create(router);
    ApiRadar.create(router);

    this.app.use(router);
  }

}
