import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { UploadUserAvatarUseCase } from './UploadUserAvatarUseCase';

class UploadUserAvatarController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.user;

        const uploadUserAvatarUseCase = container.resolve(
            UploadUserAvatarUseCase,
        );

        const avatar_file = request.file.filename;

        await uploadUserAvatarUseCase.execute({ avatar_file, user_id: id });

        return response.status(204).send();
    }
}

export { UploadUserAvatarController };
