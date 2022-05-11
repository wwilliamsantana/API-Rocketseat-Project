import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { UserRepositoryUseCase } from './createUserUseCase';

class UserRepositoryController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { name, email, password, driver_license } = request.body;

        const userRepositoryUseCase = container.resolve(UserRepositoryUseCase);

        await userRepositoryUseCase.execute({
            name,
            email,
            password,
            driver_license,
        });

        return response.status(201).send();
    }
}

export { UserRepositoryController };
