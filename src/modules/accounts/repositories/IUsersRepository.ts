import { ICreateUserDTO } from '../dtos/ICreateUserDTO';

interface IUsersRepository {
  create(data: ICreateUserDTO): Promise<void>;
  findByEmail();
}

export { IUsersRepository };
