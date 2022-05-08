import { CategoriesRepository } from '../../repositories/implementations/CategoriesRepository';
import { ImportCategoryControlller } from './ImportCategoryController';
import { ImportCategoryUseCase } from './ImportCategoryUseCase';

const categoryRepository = null;
const importCategoryUseCase = new ImportCategoryUseCase(categoryRepository);
const importCategoryController = new ImportCategoryControlller(
    importCategoryUseCase,
);

export { importCategoryController };
