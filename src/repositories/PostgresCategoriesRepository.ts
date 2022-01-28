import { Category } from '../model/Category';
import {
  ICategoriesRepositoy,
  ICreateCategoryDTO,
} from './ICategoriesRepository';

class PostgresCategoriesRepository implements ICategoriesRepositoy {
  findByName(name: string): Category {
    console.log(name);
    return null;
  }
  List(): Category[] {
    return null;
  }
  create({ name, description }: ICreateCategoryDTO): void {
    console.log(name, description);
  }
}

export { PostgresCategoriesRepository };
