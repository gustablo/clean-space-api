import bcrypt from 'bcrypt';

import { IHashPassword } from '@/providers/HashPassword/IHashPassword';

export class BcryptHashPassword implements IHashPassword {
  SALT_ROUNDS = 10;

  async compare(password: string, hashed: string): Promise<boolean> {
    const match = await bcrypt.compare(password, hashed);

    return match;
  }

  async encrypt(password: string): Promise<string> {
    const encryptedPassword = await bcrypt.hash(password, this.SALT_ROUNDS);

    return encryptedPassword;
  }
}
