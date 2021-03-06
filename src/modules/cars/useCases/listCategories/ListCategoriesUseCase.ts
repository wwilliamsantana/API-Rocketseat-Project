import { inject, injectable } from 'tsyringe';

import { Category } from '../../entities/Category';
import { ICategoriesRepository } from '../../repositories/ICategoriesRepository';

@injectable()
class ListCategoriesUseCase {
    constructor(
        @inject('CategoriesRepository')
        private categoriesrepository: ICategoriesRepository,
    ) {}

    async execute(): Promise<Category[]> {
        const categories = await this.categoriesrepository.list();

        return categories;
    }
}

export { ListCategoriesUseCase };
