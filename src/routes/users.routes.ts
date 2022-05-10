import { Router } from 'express';

import { UserRepositoryController } from '../modules/accounts/useCases/UserRepositoryController';

const usersRoutes = Router();
const userRepositoryController = new UserRepositoryController();

usersRoutes.post('/', userRepositoryController.handle);

export { usersRoutes };
