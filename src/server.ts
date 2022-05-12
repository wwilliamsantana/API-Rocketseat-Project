import 'reflect-metadata';
import express, { NextFunction, Request, Response } from 'express';
import swaggerUI from 'swagger-ui-express';

import 'express-async-errors';

import { AppError } from './error/AppError';
import { router } from './routes';
import swaggerFile from './swagger.json';
import './shared/container';

import './database';

const app = express();

app.use(express.json());

app.use(router);

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerFile));

app.use(
    (err: Error, request: Request, response: Response, next: NextFunction) => {
        if (err instanceof AppError) {
            return response.status(err.statusCode).json({
                message: err.message,
            });
        }

        return response.status(500).json({
            message: `Interval server erro - ${err.message}`,
        });
    },
);

app.listen(3333, () => {
    console.log('Server is running!');
});
