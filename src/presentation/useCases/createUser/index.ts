import { getCustomRepository } from 'typeorm';

import { CreateUserUseCase } from '@/domain/useCases/createUser/CreateUserUseCase';
import { BcryptHashPassword } from '@/providers/HashPassword/implementations/BcryptHashPassword';
import { CreateUserController } from '@/presentation/useCases/createUser/CreateUserController';
import { TypeOrmUserRepository } from '@/persistence/user/repositories/implementations/TypeOrmUserRepository';

const typeOrmUserRepository = getCustomRepository(TypeOrmUserRepository);
const bcryptHashPassword = new BcryptHashPassword();

const createUserUseCase = new CreateUserUseCase(typeOrmUserRepository, bcryptHashPassword);
const createUserController = new CreateUserController(createUserUseCase);

export { createUserController };
