"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
require("./config/aliases");
require("dotenv/config");
require("reflect-metadata");
const app_1 = require("@/main/config/app");
const routes_1 = require("@/main/config/routes");
const database_1 = require("@/main/config/database");
const PORT = process.env.PORT || 3000;
const init = () => __awaiter(void 0, void 0, void 0, function* () {
    const server = yield app_1.app(PORT);
    yield (yield database_1.setupConnection()).synchronize();
    routes_1.setupRoutes(server);
    yield server.start();
    console.log(`Server running on ${server.info.uri}`, server.info.uri);
});
init();
