import { Router } from 'express';
import { v4 as uuidV4 } from 'uuid';

const categoriesRoutes = Router();

const categories = [];

categoriesRoutes.post('/', (request, response) => {
  const { name, descrition } = request.body;

  const category = {
    name,
    descrition,
    id: uuidV4(),
  };

  categories.push(category);

  return response.status(201).send();
});

export { categoriesRoutes };
