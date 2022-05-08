import { getRepository, Repository } from 'typeorm';

import { Specification } from '../../entities/Spcecification';
import {
    ICreateSpecificationDTO,
    ISpecificationRepository,
} from '../ISpecificationRepository';

class SpecificationRepository implements ISpecificationRepository {
    private specifications: Repository<Specification>;

    constructor() {
        this.specifications = getRepository(Specification);
    }

    async create({
        name,
        description,
    }: ICreateSpecificationDTO): Promise<void> {
        const specification = this.specifications.create({ name, description });

        await this.specifications.save(specification);
    }

    async findByName(name: string): Promise<Specification> {
        const specification = await this.specifications.findOne({ name });

        return specification;
    }

    async list(): Promise<Specification[]> {
        const all = await this.specifications.find();

        return all;
    }
}

export { SpecificationRepository };
