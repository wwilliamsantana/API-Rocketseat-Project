import { hash } from 'bcryptjs';
import { inject, injectable } from 'tsyringe';

import { AppError } from '../../../../error/AppError';
import { IUserRepositoryDTO } from '../../dtos/IUserRepositoryDTO';
import { IUserRepository } from '../../repositories/IUserRepository';

@injectable()
class CreateUserUseCase {
    constructor(
        @inject('UserRepository')
        private userRepository: IUserRepository,
    ) {}

    async execute({
        name,
        email,
        driver_license,
        password,
    }: IUserRepositoryDTO): Promise<void> {
        const userAlreadyExist = await this.userRepository.findByEmail(email);

        if (userAlreadyExist) {
            throw new AppError('User already exists');
        }

        const passwordHash = await hash(password, 8);

        await this.userRepository.create({
            name,
            email,
            driver_license,
            password: passwordHash,
        });
    }
}

export { CreateUserUseCase };
