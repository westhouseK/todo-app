import { ID, Field, ObjectType } from '@nestjs/graphql';
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export default class Hoge extends BaseEntity {
  @PrimaryGeneratedColumn()
  @Field(() => ID, { description: 'id' })
  id: number;

  @Column({ type: 'text' })
  @Field(() => String, { description: 'name' })
  name: string;
}
