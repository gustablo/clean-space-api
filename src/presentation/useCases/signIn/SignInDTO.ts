import { Auth } from '@/domain/entities/Auth';

export type SignInRequestDTO = {
  email: string;
  password: string;
};

export class SignInResponseDTO {
  token: string;

  static map(auth: Partial<Auth>): SignInResponseDTO {
    return {
      token: auth.token,
    };
  }
}
