import { SpecificationRepository } from '../repositories/SpecificationRepository';

interface IRequest {
    name: string;
    description: string;
}

class CreateSpecificationServices {
    constructor(private specificationRepository: SpecificationRepository) {}

    execute({ name, description }: IRequest): void {
        const specificationAlreadyExists =
            this.specificationRepository.findByName(name);

        if (specificationAlreadyExists) {
            throw new Error('Specification Already exist!');
        }

        this.specificationRepository.create({ name, description });
    }
}

export { CreateSpecificationServices };
