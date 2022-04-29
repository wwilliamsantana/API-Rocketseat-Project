import { Specification } from '../model/Spcecification';

interface ICreateSpecificationDTO {
    name: string;
    description: string;
}

interface ISpecificationRepository {
    findByName(name: string): Specification;
    list(): Specification[];
    create({ name, description }: ICreateSpecificationDTO): void;
}

export { ISpecificationRepository, ICreateSpecificationDTO };
