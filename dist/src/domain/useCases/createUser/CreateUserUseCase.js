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
exports.CreateUserUseCase = void 0;
class CreateUserUseCase {
    constructor(userRepository, hashPassword) {
        this.userRepository = userRepository;
        this.hashPassword = hashPassword;
    }
    execute(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const { password, confirmPassword } = data;
            if (password !== confirmPassword) {
                throw new Error('Passwords must be equals');
            }
            const hashPassword = yield this.hashPassword.encrypt(password);
            data.password = hashPassword;
            const createdUser = yield this.userRepository.createUser(data);
            return createdUser;
        });
    }
}
exports.CreateUserUseCase = CreateUserUseCase;
