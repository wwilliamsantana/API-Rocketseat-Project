import { Router } from 'express';
import multer from 'multer';

import { CreateCategoryController } from '../modules/cars/useCases/createCategory/CreateCategoryController';
import { ImportCategoryControlller } from '../modules/cars/useCases/importCategory/ImportCategoryController';
import { ListCategoriesController } from '../modules/cars/useCases/listCategories/ListCategoriesController';

const createCategoryController = new CreateCategoryController();
const importCategoryController = new ImportCategoryControlller();
const listCategoriesController = new ListCategoriesController();

const categoriesRouter = Router();
const upload = multer({
    dest: './tmp',
});

categoriesRouter.post('/', createCategoryController.handle);

categoriesRouter.get('/', listCategoriesController.handle);

categoriesRouter.post(
    '/import',
    upload.single('file'),
    importCategoryController.handle,
);

export { categoriesRouter };
