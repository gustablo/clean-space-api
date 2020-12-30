import Hapi from '@hapi/hapi';

const app = (port: number | string) => {
  const server = Hapi.server({
    port,
  });

  return server;
};

export { app };
