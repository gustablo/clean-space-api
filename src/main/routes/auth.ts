import { Server } from '@hapi/hapi';

import { adaptHapiRoutes } from '@/main/adapters/hapiRoutes';
import { signInController } from '@/presentation/useCases/signIn';

export default async (server: Server) => {
  return server.route({
    method: 'POST',
    path: '/auth',
    handler: adaptHapiRoutes(signInController),
  });
};
