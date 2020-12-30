import { Auth } from '@/domain/entities/Auth';
import { User } from '@/domain/entities/User';

export interface IUserRepository {
  createUser(user: Omit<User, 'id'>): Promise<User>;
  auth(crendetials: Auth): Promise<Partial<User>>;
}
