import { User } from '@/domain/entities/User';

export type CreateUserRequestDTO = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export class CreateUserResponseDTO {
  name: string;
  email: string;

  static map(user: User): CreateUserResponseDTO {
    return {
      name: user.name,
      email: user.email,
    };
  }
}
