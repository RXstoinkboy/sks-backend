/* eslint-disable no-console */
import * as mongoose from 'mongoose';

export const db = (): void => {
   mongoose.connect(process.env.DB_CONNECTION_STRING);

   const db = mongoose.connection;

   db.on('error', console.error.bind(console, 'connection error: '));
   db.once('open', () => {
      console.log('Database connected successfully');
   });
};
