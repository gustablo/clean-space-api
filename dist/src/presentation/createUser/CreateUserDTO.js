"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserResponseDTO = void 0;
class CreateUserResponseDTO {
    static map(user) {
        return {
            name: user.name,
            email: user.email,
        };
    }
}
exports.CreateUserResponseDTO = CreateUserResponseDTO;
