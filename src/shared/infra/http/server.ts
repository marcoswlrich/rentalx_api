import { createConnection } from '@shared/infra/typeorm';

import { app } from './app';

createConnection();

app.listen(4002, () => console.log('Server is running'));
