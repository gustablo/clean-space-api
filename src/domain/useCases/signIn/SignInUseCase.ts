import { IUseCase } from '@/domain/contracts/useCase/IUseCase';
import { Auth } from '@/domain/entities/Auth';
import { IUserRepository } from '@/persistence/user/repositories/IUserRepository';
import { IHashPassword } from '@/providers/HashPassword/IHashPassword';
import { IJwtToken } from '@/providers/JwtToken/IJwtToken';

export class SignInUseCase implements IUseCase {
  constructor(private userRepository: IUserRepository, private hashPassword: IHashPassword, private jwtToken: IJwtToken) {}

  async execute(credentials: Auth): Promise<Partial<Auth>> {
    const user = await this.userRepository.auth(credentials);

    if (!user) throw new Error('User not found.');

    const matchPassword = await this.hashPassword.compare(credentials.password, user.password);

    if (!matchPassword) throw new Error('Incorrect Credentials.');

    const token = this.jwtToken.sign(user.id);

    return { token };
  }
}
