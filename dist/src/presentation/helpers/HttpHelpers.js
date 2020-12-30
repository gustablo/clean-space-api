"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.internalError = exports.ok = exports.created = void 0;
const created = (data) => ({
    statusCode: 201,
    data,
});
exports.created = created;
const ok = (data) => ({
    statusCode: 200,
    data,
});
exports.ok = ok;
const internalError = (error) => ({
    statusCode: 500,
    data: { error: error.message },
});
exports.internalError = internalError;
