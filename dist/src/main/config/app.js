"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const hapi_1 = __importDefault(require("@hapi/hapi"));
const app = (port) => {
    const server = hapi_1.default.server({
        port,
    });
    return server;
};
exports.app = app;
