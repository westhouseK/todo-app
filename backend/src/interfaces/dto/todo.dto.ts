import { FilterableField, IDField, KeySet } from '@nestjs-query/query-graphql';
import { ObjectType, ID, GraphQLISODateTime } from '@nestjs/graphql';

export class CreateTodoDTO {
  name: string;
}

export class UpdateTodoDTO {
  id: number;
  name: string;
}

@ObjectType('TodoItem')
@KeySet(['id'])
export class TodoItemDTO {
  @IDField(() => ID)
  id!: number;

  @FilterableField()
  text!: string;
}
