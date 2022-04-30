import { ImportCategoryControlller } from './ImportCategoryController';
import { ImportCategoryUseCase } from './ImportCategoryUseCase';

const importCategoryUseCase = new ImportCategoryUseCase();
const importCategoryController = new ImportCategoryControlller(
    importCategoryUseCase,
);

export { importCategoryController };
