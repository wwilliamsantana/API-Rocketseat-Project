import { inject, injectable } from 'tsyringe';

import { deleteFile } from '../../../../utils/file';
import { IUserRepository } from '../../repositories/IUserRepository';

interface IRequest {
    avatar_file: string;
    user_id: string;
}

@injectable()
class UploadUserAvatarUseCase {
    constructor(
        @inject('UserRepository')
        private userRepository: IUserRepository,
    ) {}

    async execute({ avatar_file, user_id }: IRequest): Promise<void> {
        const user = await this.userRepository.findById(user_id);

        if (user.avatar) {
            await deleteFile(`./tmp/avatar/${user.avatar}`);
        }

        user.avatar = avatar_file;

        await this.userRepository.create(user);
    }
}

export { UploadUserAvatarUseCase };
