import { getCustomRepository } from 'typeorm';

import { SignInUseCase } from '@/domain/useCases/signIn/SignInUseCase';
import { TypeOrmUserRepository } from '@/persistence/user/repositories/implementations/TypeOrmUserRepository';
import { SignInController } from '@/presentation/useCases/signIn/SignInController';
import { BcryptHashPassword } from '@/providers/HashPassword/implementations/BcryptHashPassword';
import { JsonWebToken } from '@/providers/JwtToken/implementations/JsonWebToken';

const jwtToken = new JsonWebToken();
const typeOrmUserRepository = getCustomRepository(TypeOrmUserRepository);
const bcryptHashPassword = new BcryptHashPassword();

const signInUseCase = new SignInUseCase(typeOrmUserRepository, bcryptHashPassword, jwtToken);
const signInController = new SignInController(signInUseCase);

export { signInController };
