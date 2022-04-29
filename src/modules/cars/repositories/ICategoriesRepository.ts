import { Category } from '../model/Category';

interface ICreateCategoryDTO {
    name: string;
    description: string;
}

interface ICategoryRepository {
    findByName(name: string): Category;
    list(): Category[];
    create({ name, description }: ICreateCategoryDTO);
}

export { ICategoryRepository, ICreateCategoryDTO };
