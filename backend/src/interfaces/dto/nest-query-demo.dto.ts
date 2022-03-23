import {
  FilterableField,
  IDField,
  PagingStrategies,
  QueryOptions,
} from '@nestjs-query/query-graphql';
import { ObjectType, ID, GraphQLISODateTime, Field } from '@nestjs/graphql';

@ObjectType('NestQueryDemoDto')
@QueryOptions({ pagingStrategy: PagingStrategies.OFFSET })
export class NestQueryDemoDto {
  @IDField(() => ID)
  id!: string;

  @FilterableField()
  title!: string;

  @FilterableField()
  completed!: boolean;

  @Field(() => GraphQLISODateTime)
  created!: Date;

  @Field(() => GraphQLISODateTime)
  updated!: Date;
}
