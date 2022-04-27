import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';
dotenv.config();

const ROOT_PATH = path.normalize(__dirname + '/..');

const packageJson = JSON.parse(
    fs.readFileSync(ROOT_PATH + '/package.json', 'utf-8')
);

const APP_LABEL = packageJson.label;
const APP_NAME = packageJson.name;
const VER = packageJson.version;
const ENV = process.env.NODE_ENV || 'production';
const APP_HOST = process.env.APP_HOSTNAME || 'localhost';
const APP_PORT = Number(process.env.APP_PORT) || 3000;

const DB_HOSTNAME = process.env.DB_HOSTNAME;
const DB_PORT = process.env.DB_PORT;
const DB_DATABASE = process.env.DB_DATABASE;
const DB_USERNAME = process.env.DB_USERNAME
  ? process.env.DB_USERNAME + ':'
  : '';
const DB_PASSWORD = process.env.DB_PASSWORD
  ? process.env.DB_PASSWORD + '@'
  : '';
const DB_SSL = process.env.DB_SSL ? process.env.DB_SSL : 'false';

const DB_CONNECT_STR =
  'mongodb://' +
  DB_USERNAME +
  DB_PASSWORD +
  DB_HOSTNAME +
  ':' +
  DB_PORT +
  '/' +
  DB_DATABASE +
  '?ssl=' +
  DB_SSL;

// interface Config {
//     env: string;
//     port: number;
//     dbHost: string;
//     DB_USERNAME: string;
//     DB_PASSWORD: string;
//     DB_DATABASE: string;
//     SESSION_SECRET: string;
//     SSL: boolean;
// };

let config = {
    app: {
        ver: VER,
        name: APP_NAME,
        label: APP_LABEL,
        rootPath: ROOT_PATH,
        environment: ENV,
    },
    SESSION_SECRET: process.env.SESSION_SECRET || 'stockchain',
    ssl: Boolean(process.env.ssl) || false,
    host: APP_HOST,
    port: APP_PORT,
    dbHost: DB_HOSTNAME,
    dbPort: DB_PORT,
    dbDatabase: DB_DATABASE,
    dbConnectStr: DB_CONNECT_STR
};

export default config;
