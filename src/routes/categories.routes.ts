import { Router } from 'express';

import { CategoriesRepository } from '../repositories/CategoriesRepository';
import { CreateCategoryServices } from '../services/CreateCategoryServices';

const categoriesRouter = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRouter.post('/', (request, response) => {
    const { name, description } = request.body;

    const createCategoryServices = new CreateCategoryServices(
        categoriesRepository,
    );

    createCategoryServices.execute({ name, description });

    return response.status(201).send();
});

categoriesRouter.get('/', (request, response) => {
    const all = categoriesRepository.list();

    return response.json(all);
});

export { categoriesRouter };
