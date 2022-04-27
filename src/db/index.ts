import mongoose, { ConnectOptions } from 'mongoose';
import config from '../config';

export class DB {
    constructor() {

        let options:ConnectOptions = {};
        mongoose.connect(config.dbConnectStr, options, (err) => {
            if(err) {
                console.error('mongoose connect error');
                console.error(err);
                throw err;
            }
        });

        mongoose.connection.on('connected', () => {
            console.info(`Successfull connection on ${config.dbHost}:${config.dbPort}/${config.dbDatabase}`);
        });

        mongoose.connection.on('error', (err) => {
            console.error(`Failed to connect to DB ${config.dbHost}:${config.dbPort}/${config.dbDatabase}`);
        });

        mongoose.connection.on('disconnected', () => {
            console.info('DB Disconnected');
        })
    }
}