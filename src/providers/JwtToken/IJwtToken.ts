export interface IJwtToken {
  sign(id: string | number): string;
}
