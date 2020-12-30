"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeOrmConnectionAdapter = void 0;
const path_1 = __importDefault(require("path"));
const typeorm_1 = require("typeorm");
const typeOrmConnectionAdapter = (options) => typeorm_1.createConnection({
    type: options.driver,
    host: options.host,
    port: Number(options.port),
    username: options.user,
    password: options.password,
    database: options.database,
    entities: [path_1.default.resolve(__dirname, '../../persistence/**/*.{ts,js}')],
    synchronize: true,
});
exports.typeOrmConnectionAdapter = typeOrmConnectionAdapter;
