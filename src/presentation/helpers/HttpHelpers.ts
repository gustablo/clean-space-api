import { IHttpResponse } from '@/presentation/contracts/http/IHttpResponse';

export const created = (data: unknown): IHttpResponse => ({
  statusCode: 201,
  data,
});

export const ok = (data: unknown): IHttpResponse => ({
  statusCode: 200,
  data,
});

export const internalError = (error: Error): IHttpResponse => ({
  statusCode: 500,
  data: { error: error.message },
});
