import './config/aliases';
import 'dotenv/config';
import 'reflect-metadata';

import { app } from '@/main/config/app';
import { setupRoutes } from '@/main/config/routes';
import { setupConnection } from '@/main/config/database';

const PORT = process.env.PORT || 3000;

const init = async () => {
  const server = await app(PORT);

  await (await setupConnection()).synchronize();
  setupRoutes(server);

  await server.start();
  console.log(`Server running on ${server.info.uri}`, server.info.uri);
};

init();
