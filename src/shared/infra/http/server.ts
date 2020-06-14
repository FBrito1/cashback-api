import 'reflect-metadata';
import 'dotenv/config';
import * as Sentry from '@sentry/node';

import express, { Response, Request, NextFunction } from 'express';
import { errors } from 'celebrate';
import 'express-async-errors';
import routes from './routes';
import AppError from '@shared/errors/AppError';

import '@shared/infra/typeorm';
import '@shared/container';

const app = express();

app.use(Sentry.Handlers.requestHandler());
app.use(express.json());
app.use(routes);
app.use(Sentry.Handlers.errorHandler());
app.use(errors());

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        status: 'error',
        message: err.message,
      });
    }

    console.error(err);
    return response.status(500).json({
      status: 'error',
      message: 'Internal server error',
    });
  },
);

app.listen(3333, () => {
  console.log('SENTRYKEY', process.env.SENTRY_DSN_KEY);
  Sentry.init({ dsn: process.env.SENTRY_DSN_KEY });
  console.log('Server start on port 3333');
});
