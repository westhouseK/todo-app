import { QueryOptions } from '@nestjs-query/query-graphql';
import { ArgsType, Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
@ArgsType()
@QueryOptions({ defaultResultSize: 5 })
export class Todo {
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
