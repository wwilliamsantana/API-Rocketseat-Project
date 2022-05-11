import { Router } from 'express';

import { authenticateRoutes } from './authenticate.routes';
import { categoriesRouter } from './categories.routes';
import { specificationRouter } from './specification.routes';
import { usersRoutes } from './users.routes';

const router = Router();

router.use('/categories', categoriesRouter);
router.use('/specifications', specificationRouter);
router.use('/users', usersRoutes);
router.use(authenticateRoutes);

export { router };
