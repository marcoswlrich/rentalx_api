import express from 'express';
import swaggerUi from 'swagger-ui-express';

import 'reflect-metadata';
import './shared/container';
import './database';
import { router } from './routes';
import swaggerFile from './swagger.json';

const app = express();

app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(router);

app.listen(4002, () => console.log('Server is running'));
