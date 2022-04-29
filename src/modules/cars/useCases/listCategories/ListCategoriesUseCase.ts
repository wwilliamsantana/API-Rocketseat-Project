import { Category } from '../../model/Category';
import { ICategoriesRepository } from '../../repositories/ICategoriesRepository';

class ListCategoriesUseCase {
    constructor(private categoriesrepository: ICategoriesRepository) {}

    execute(): Category[] {
        const categories = this.categoriesrepository.list();

        return categories;
    }
}

export { ListCategoriesUseCase };
