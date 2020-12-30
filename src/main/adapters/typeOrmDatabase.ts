import path from 'path';

import { createConnection } from 'typeorm';

type ConnectionOptions = {
  driver: 'mysql' | 'postgres';
  host: string;
  port: number;
  user: string;
  password: string;
  database: string;
};

export const typeOrmConnectionAdapter = (options: ConnectionOptions) =>
  createConnection({
    type: options.driver,
    host: options.host,
    port: Number(options.port),
    username: options.user,
    password: options.password,
    database: options.database,
    entities: [path.resolve(__dirname, '../../persistence/**/*.{ts,js}')],
    synchronize: true,
  });
