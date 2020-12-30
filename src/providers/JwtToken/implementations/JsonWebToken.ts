import jwt from 'jsonwebtoken';

import { IJwtToken } from '@/providers/JwtToken/IJwtToken';

export class JsonWebToken implements IJwtToken {
  sign(id: string | number): string {
    const token = jwt.sign({ id }, process.env.SECRET_KEY);

    return token;
  }
}
