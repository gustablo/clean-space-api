import { EntityRepository, Repository } from 'typeorm';

import { User } from '@/domain/entities/User';
import { IUserRepository } from '@/persistence/user/repositories/IUserRepository';
import { TypeOrmUserEntity } from '@/persistence/user/entities/TypeOrmUserEntity';
import { Auth } from '@/domain/entities/Auth';

@EntityRepository(TypeOrmUserEntity)
export class TypeOrmUserRepository extends Repository<TypeOrmUserEntity> implements IUserRepository {
  async createUser(user: Omit<User, 'id'>): Promise<User> {
    const created = this.create({
      password: user.password,
      email: user.email,
      name: user.name,
    });

    await created.save();

    return { ...created, confirmPassword: created.password };
  }

  async auth(credentials: Auth): Promise<Partial<User>> {
    const { email } = credentials;

    const user = await this.findOne({ where: { email } });

    return user;
  }
}
