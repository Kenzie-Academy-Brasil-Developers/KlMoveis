import 'reflect-metadata';
import 'express-async-errors';
import express, { Application, json } from 'express';
import { routes } from './routes';
import { handleErrors } from './middlewares/handleError.error';

const app: Application = express();
app.use(json());
app.use('/', routes);
app.use(handleErrors);

export default app;
