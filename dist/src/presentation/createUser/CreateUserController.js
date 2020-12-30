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
exports.CreateUserController = void 0;
const CreateUserDTO_1 = require("@/presentation/createUser/CreateUserDTO");
const HttpHelpers_1 = require("@/presentation/helpers/HttpHelpers");
class CreateUserController {
    constructor(createUserUseCase) {
        this.createUserUseCase = createUserUseCase;
    }
    handle({ body }) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const created = yield this.createUserUseCase.execute(body);
                return HttpHelpers_1.ok(CreateUserDTO_1.CreateUserResponseDTO.map(created));
            }
            catch (error) {
                return HttpHelpers_1.internalError(error);
            }
        });
    }
}
exports.CreateUserController = CreateUserController;
