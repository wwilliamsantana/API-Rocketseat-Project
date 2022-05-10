import { inject, injectable } from 'tsyringe';

import { IUserRepositoryDTO } from '../dtos/IUserRepositoryDTO';
import { IUserRepository } from '../repositories/IUserRepository';

@injectable()
class UserRepositoryUseCase {
    constructor(
        @inject('UserRepository')
        private userRepository: IUserRepository,
    ) {}

    async execute({
        name,
        email,
        username,
        driver_license,
        password,
    }: IUserRepositoryDTO): Promise<void> {
        await this.userRepository.create({
            name,
            email,
            username,
            driver_license,
            password,
        });
    }
}

export { UserRepositoryUseCase };
