import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export default class Todo {
  @PrimaryGeneratedColumn()
  @Field()
  public id!: number;

  @Column({ type: 'text' })
  @Field()
  public text: string;

  @Column({ type: 'int' })
  @Field()
  public status: number;
}
