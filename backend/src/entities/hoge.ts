import { ID, Field, ObjectType } from '@nestjs/graphql';
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export default class Hoge extends BaseEntity {
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  id: number;

  @Column({ type: 'text' })
  // @Field(() => String, { description: 'aaa' })
  @Field({ description: 'aaa' })
  name: string;
}
