import { Router } from 'express';

import { UserRepositoryController } from '../modules/accounts/useCases/createUser/createUserController';

const usersRoutes = Router();
const userRepositoryController = new UserRepositoryController();

usersRoutes.post('/', userRepositoryController.handle);

export { usersRoutes };
