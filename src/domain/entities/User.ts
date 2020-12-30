export type User = {
  readonly id?: string | number;
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};
