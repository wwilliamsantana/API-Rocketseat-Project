import { IUserRepositoryDTO } from '../dtos/IUserRepositoryDTO';

interface IUserRepository {
    create(data: IUserRepositoryDTO): Promise<void>;
}

export { IUserRepository };
