import { DataSource } from 'typeorm';

import { User } from '@modules/accounts/infra/typeorm/entities/User';
import { Car } from '@modules/cars/infra/typeorm/entities/Car';
import { CarImage } from '@modules/cars/infra/typeorm/entities/CarImage';
import { Category } from '@modules/cars/infra/typeorm/entities/Category';
import { Specification } from '@modules/cars/infra/typeorm/entities/Specification';
import { Rental } from '@modules/rentals/infra/typeorm/entities/Rental';

import { CreateCategories1662948592066 } from './migrations/1662948592066-CreateCategories';
import { CreateSpecifications1662949570943 } from './migrations/1662949570943-CreateSpecifications';
import { CreateUsers1662949701592 } from './migrations/1662949701592-CreateUsers';
import { AlterUserDeleteUsername1662949817881 } from './migrations/1662949817881-AlterUserDeleteUsername';
import { AlterUserAddAvatar1662949908328 } from './migrations/1662949908328-AlterUserAddAvatar';
import { CreateCars1662950006861 } from './migrations/1662950006861-CreateCars';
import { CreateSpecificationsCars1662950089462 } from './migrations/1662950089462-CreateSpecificationsCars';
import { CreateCarImages1662950176527 } from './migrations/1662950176527-CreateCarImages';
import { CreateRentals1662950277039 } from './migrations/1662950277039-CreateRentals';

const dataSource = new DataSource({
  type: 'postgres',
  port: 5432, // change localhost to run migration
  username: 'docker',
  password: 'ignite',
  database: process.env.NODE_ENV === 'test' ? 'rentx_test' : 'rentx',
  entities: [Category, Specification, User, Car, CarImage, Rental],
  migrations: [
    CreateCategories1662948592066,
    CreateSpecifications1662949570943,
    CreateUsers1662949701592,
    AlterUserDeleteUsername1662949817881,
    AlterUserAddAvatar1662949908328,
    CreateCars1662950006861,
    CreateSpecificationsCars1662950089462,
    CreateCarImages1662950176527,
    CreateRentals1662950277039,
  ],
});

function createConnection(host = 'database_ignite'): Promise<DataSource> {
  return dataSource.setOptions({ host }).initialize();
}

export { dataSource, createConnection };
