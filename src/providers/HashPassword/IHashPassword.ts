export interface IHashPassword {
  encrypt(password: string): Promise<string>;
  compare(password: string, hashed: string): Promise<boolean>;
}
