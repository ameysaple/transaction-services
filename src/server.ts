import express, { NextFunction, Request, Response } from 'express';
import helmet from 'helmet';
import { createServer, Server } from 'http';
import config from './config';
// import * as lusca from 'lusca';
import { errorHandler } from './middleware/error.middleware';
import routes from './routes';
import { DB } from './db';

export class Application {
    public static readonly PORT: number = config.port;
    private port: number | string;
    private app: express.Application;
    private server!: Server;

    constructor() {
        this.app = express();
        this.port = Application.PORT;
        this._runInit();
    }

    private _runInit() {
        this._setupModules();
        this.server = createServer(this.app);
        this.app.use('/', routes);
        new DB();
        this.listen();
    }   

    private _setupModules() {
        this.app.use(express.json({limit: '5mb'}));
        this.app.use(express.urlencoded());
        // this.app.use(lusca({
        //     csrf: true,
        //     xframe: 'SAMEORIGIN',
        //     p3p: '$R@#FEFFDFOJINJ',
        //     hsts: {maxAge: 31536000, includeSubDomains: true},  // HTTP Strict Transport Security
        //     xssProtection: true
        // }));
        this.app.use((request: Request, response: Response, next: NextFunction) => {
            response.cookie('XSRF-TOKEN', response.locals._csrf, { secure: config.ssl });
            next();
        });
        this.app.use(helmet());
        this.app.use(errorHandler);
    }

    private listen() {
        this.server.listen(this.port, () => {
            console.log(`Web Server [] running on port %s`, this.port);
        })
    }

    get run() {
        return this.app;
    }
}