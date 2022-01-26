import { Router } from 'express';

const categoriesRoutes = Router();

const categories = [];

categoriesRoutes.post('/categories', (request, response) => {
  const { name, descrition } = request.body;

  categories.push({
    name,
    descrition,
  });

  return response.status(201).send();
});

export { categoriesRoutes };
