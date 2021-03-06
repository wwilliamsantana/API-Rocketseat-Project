import { inject, injectable } from 'tsyringe';

import { AppError } from '../../../../error/AppError';
import { ISpecificationRepository } from '../../repositories/ISpecificationRepository';

interface IRequest {
    name: string;
    description: string;
}

@injectable()
class CreateSpecificationUseCase {
    constructor(
        @inject('SpecificationRepository')
        private specificationRepository: ISpecificationRepository,
    ) {}

    async execute({ name, description }: IRequest): Promise<void> {
        const specificationAlreadyExists =
            await this.specificationRepository.findByName(name);

        if (specificationAlreadyExists) {
            throw new AppError('Specification Already exist!');
        }

        this.specificationRepository.create({ name, description });
    }
}

export { CreateSpecificationUseCase };
