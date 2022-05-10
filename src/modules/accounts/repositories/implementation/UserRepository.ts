import { getRepository, Repository } from 'typeorm';

import { IUserRepositoryDTO } from '../../dtos/IUserRepositoryDTO';
import { User } from '../../entities/User';
import { IUserRepository } from '../IUserRepository';

class UserRepository implements IUserRepository {
    private userRepository: Repository<User>;

    constructor() {
        this.userRepository = getRepository(User);
    }

    async create({
        name,
        email,
        driver_license,
        password,
        username,
    }: IUserRepositoryDTO): Promise<void> {
        const user = this.userRepository.create({
            name,
            email,
            driver_license,
            password,
            username,
        });

        await this.userRepository.save(user);
    }
}

export { UserRepository };
