import { SignInUseCase } from '@/domain/useCases/signIn/SignInUseCase';
import { IController } from '@/presentation/contracts/http/IController';
import { IHttpRequest } from '@/presentation/contracts/http/IHttpRequest';
import { IHttpResponse } from '@/presentation/contracts/http/IHttpResponse';
import { internalError, ok } from '@/presentation/helpers/HttpHelpers';
import { SignInRequestDTO, SignInResponseDTO } from '@/presentation/useCases/signIn/SignInDTO';

export class SignInController implements IController {
  constructor(private signInUseCase: SignInUseCase) {}

  async handle({ body }: IHttpRequest<SignInRequestDTO>): Promise<IHttpResponse<SignInResponseDTO>> {
    try {
      const user = await this.signInUseCase.execute({
        email: body.email,
        password: body.password,
      });

      return ok(SignInResponseDTO.map(user));
    } catch (error) {
      return internalError(error);
    }
  }
}
