import { typeOrmConnectionAdapter } from '../adapters/typeOrmDatabase';

type DriverType = 'mysql' | 'postgres';

const { DB_HOST, DB_PORT, DB_USERNAME, DB_PASSWORD, DB_NAME } = process.env;
const DB_DRIVER = process.env.DB_DRIVER as DriverType;

export const setupConnection = async () =>
  typeOrmConnectionAdapter({
    driver: DB_DRIVER,
    port: Number(DB_PORT),
    host: DB_HOST,
    database: DB_NAME,
    password: DB_PASSWORD,
    user: DB_USERNAME,
  });
