import * as cookieParser from 'cookie-parser';
import * as dotenv from 'dotenv';
import * as express from 'express';
import * as logger from 'morgan';
import * as path from 'path';
import { Express } from 'express';

export const setupAppConfig = (app: Express): void => {
   dotenv.config();
   app.use(logger('dev'));
   app.use(express.json());
   app.use(express.urlencoded({ extended: false }));
   app.use(cookieParser());
   app.use(express.static(path.join(__dirname, 'public')));
};
