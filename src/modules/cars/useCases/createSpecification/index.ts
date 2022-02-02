import { SpecificationRepository } from '../../repositories/implementations/SpecificationRepository';
import { CreateSpecificationController } from './CreateSpecificationController';
import { CreateSpecificationUseCase } from './CreateSpecificationUseCase';

const specificationRepository = new SpecificationRepository();

const createSpecificationUseCase = new CreateSpecificationUseCase(
  specificationRepository,
);

const createSpecificationControler = new CreateSpecificationController(
  createSpecificationUseCase,
);

export { createSpecificationControler };
