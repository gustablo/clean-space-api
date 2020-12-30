import { IHttpRequest } from '@/presentation/contracts/http/IHttpRequest';
import { IHttpResponse } from '@/presentation/contracts/http/IHttpResponse';

export interface IController {
  handle(request?: IHttpRequest): Promise<IHttpResponse>;
}
