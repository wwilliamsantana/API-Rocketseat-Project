import { Router } from 'express';
import multer from 'multer';

import uploadConfig from '../config/upload';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
import { CreateUserController } from '../modules/accounts/useCases/createUser/CreateUserController';
import { UploadUserAvatarController } from '../modules/accounts/useCases/uploadUserAvatar/UploadUserAvatarController';

const usersRoutes = Router();
const createUserController = new CreateUserController();
const uploadUserAvatarController = new UploadUserAvatarController();

const uploadAvatar = multer(uploadConfig.upload('./tmp/avatar'));

usersRoutes.post('/', createUserController.handle);

usersRoutes.patch(
    '/avatar',
    ensureAuthenticated,
    uploadAvatar.single('avatar'),
    uploadUserAvatarController.handle,
);

export { usersRoutes };
