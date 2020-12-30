import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'users' })
export class TypeOrmUserEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number | string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;
}
