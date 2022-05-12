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
    }: IUserRepositoryDTO): Promise<void> {
        const user = this.userRepository.create({
            name,
            email,
            driver_license,
            password,
        });

        await this.userRepository.save(user);
    }

    async findByEmail(email: string): Promise<User> {
        const user = await this.userRepository.findOne({ email });

        return user;
    }

    async findById(id: string): Promise<User> {
        const user = await this.userRepository.findOne(id);

        return user;
    }
}

export { UserRepository };
