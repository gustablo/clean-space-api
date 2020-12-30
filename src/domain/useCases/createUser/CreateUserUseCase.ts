import { IUseCase } from '@/domain/contracts/useCase/IUseCase';
import { IHashPassword } from '@/providers/HashPassword/IHashPassword';
import { IUserRepository } from '@/persistence/user/repositories/IUserRepository';
import { User } from '@/domain/entities/User';

export class CreateUserUseCase implements IUseCase {
  constructor(private userRepository: IUserRepository, private hashPassword: IHashPassword) {}

  async execute(data: User): Promise<User> {
    const { password, confirmPassword } = data;
    if (password !== confirmPassword) {
      throw new Error('Passwords must be equals');
    }

    const hashPassword = await this.hashPassword.encrypt(password);
    data.password = hashPassword;

    const createdUser = await this.userRepository.createUser(data);

    return createdUser;
  }
}
