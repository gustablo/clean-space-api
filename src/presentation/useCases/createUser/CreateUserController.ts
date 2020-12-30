import { IController } from '@/presentation/contracts/http/IController';
import { IHttpRequest } from '@/presentation/contracts/http/IHttpRequest';
import { IHttpResponse } from '@/presentation/contracts/http/IHttpResponse';
import { CreateUserUseCase } from '@/domain/useCases/createUser/CreateUserUseCase';
import { CreateUserRequestDTO, CreateUserResponseDTO } from '@/presentation/useCases/createUser/CreateUserDTO';
import { internalError, ok } from '@/presentation/helpers/HttpHelpers';

export class CreateUserController implements IController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  async handle({ body }: IHttpRequest<CreateUserRequestDTO>): Promise<IHttpResponse<CreateUserResponseDTO>> {
    try {
      const created = await this.createUserUseCase.execute(body);

      return ok(CreateUserResponseDTO.map(created));
    } catch (error) {
      return internalError(error);
    }
  }
}
