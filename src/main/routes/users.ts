import { Server } from '@hapi/hapi';

import { createUserController } from '@/presentation/useCases/createUser/index';
import { adaptHapiRoutes } from '@/main/adapters/hapiRoutes';

export default async (server: Server) => {
  return server.route({
    method: 'POST',
    path: '/users',
    handler: adaptHapiRoutes(createUserController),
  });
};
