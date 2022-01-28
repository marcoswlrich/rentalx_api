import { Category } from '../model/Category';

interface ICreateCategoryDTO {
  name: string;
  description: string;
}

interface ICategoriesRepositoy {
  findByName(name: string): Category;
  List(): Category[];
  create({ name, description }: ICreateCategoryDTO): void;
}

export { ICategoriesRepositoy, ICreateCategoryDTO };
