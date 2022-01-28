import { Category } from '../model/Category';
import {
  ICategoriesRepositoy,
  ICreateCategoryDTO,
} from './ICategoriesRepository';

// DTO => Data transfer object

class CategoriesRepository implements ICategoriesRepositoy {
  private categories: Category[] = [];

  List(): Category[] {
    throw new Error('Method not implemented.');
  }
  constructor() {
    this.categories = [];
  }

  create({ description, name }: ICreateCategoryDTO): void {
    const category = new Category();

    Object.assign(category, {
      name,
      description,
      created_at: new Date(),
    });

    this.categories.push(category);
  }

  list(): Category[] {
    return this.categories;
  }

  findByName(name: string): Category {
    const category = this.categories.find(category => category.name === name);
    return category;
  }
}

export { CategoriesRepository };
