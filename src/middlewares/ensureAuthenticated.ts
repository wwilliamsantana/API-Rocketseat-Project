import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';

import { AppError } from '../error/AppError';
import { UserRepository } from '../modules/accounts/repositories/implementation/UserRepository';

export async function ensureAuthenticated(
    request: Request,
    response: Response,
    next: NextFunction,
) {
    const authHeader = request.headers.authorization;

    if (!authHeader) {
        throw new AppError('Token missing!', 401);
    }

    const [, token] = authHeader.split(' ');

    try {
        const { sub: user_id } = verify(
            token,
            'f49974bb19d32db7cdfbcb8c87e8211670338202',
        );

        const userRepository = new UserRepository();

        const idAlreadyExist = await userRepository.findById(
            user_id.toString(),
        );

        if (!idAlreadyExist) {
            throw new AppError('Invalid token', 401);
        }

        next();
    } catch {
        throw new AppError('Invalid token', 401);
    }
}
