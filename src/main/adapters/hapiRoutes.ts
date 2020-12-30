import { Request, ResponseToolkit } from '@hapi/hapi';

import { IController } from '@/presentation/contracts/http/IController';

export const adaptHapiRoutes = (controller: IController) => {
  return async (request: Request, reply: ResponseToolkit) => {
    const httpResponse = await controller.handle({
      body: request.payload,
      params: request.params,
      query: request.query,
    });

    return reply.response(httpResponse.data).code(httpResponse.statusCode);
  };
};
