import { Repository } from 'typeorm';

import {
  ICategoriesRepository,
  ICreateCategoryDTO,
} from '@modules/cars/repositories/ICategoriesRepository';
import { dataSource } from '@shared/infra/typeorm';

import { Category } from '../entities/Category';

// padrão singleton
class CategoriesRepository implements ICategoriesRepository {
  private repository: Repository<Category>;
  constructor() {
    this.repository = dataSource.getRepository(Category);
  }
  // public static getInstance(): CategoriesRepository {
  //     if (!CategoriesRepository.INSTANCE) {
  //         CategoriesRepository.INSTANCE = new CategoriesRepository();
  //     }
  //     return CategoriesRepository.INSTANCE;
  // }
  async create({ name, description }: ICreateCategoryDTO): Promise<void> {
    const category = this.repository.create({
      name,
      description,
    });
    await this.repository.save(category);
  }
  async list(): Promise<Category[]> {
    const categories = await this.repository.find();
    return categories;
  }
  async findByName(name: string): Promise<Category> {
    const category = await this.repository.findOneBy({ name });
    return category;
  }
}

export { CategoriesRepository };
