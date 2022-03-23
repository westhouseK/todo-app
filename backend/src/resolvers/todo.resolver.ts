import { Inject } from '@nestjs/common';
import {
  Args,
  Int,
  Mutation,
  Query,
  Resolver,
  Subscription,
} from '@nestjs/graphql';
import { Text } from 'decorators/text.decorator';
import { Todo } from 'entities/todo';
import { PubSub } from 'graphql-subscriptions';
import { TodoItemDTO } from 'interfaces/dto/todo.dto';
import { TodoService } from 'services/todo.service';

@Resolver(() => Todo)
export class TodoResolver {
  constructor(
    private todoService: TodoService,
    @Inject('PUB_SUB') private pubsub: PubSub,
  ) {}

  @Query(() => [Todo])
  async getTodos(@Args() dto: Todo) {
    console.log(dto);
    return this.todoService.find();
  }

  @Mutation(() => Todo)
  async addTodo(
    @Args('text', { type: () => String }) @Text('text') text: string,
  ) {
    const newTodo = await this.todoService.create(text);
    console.log(newTodo);
    this.pubsub.publish(this.getRandomInt(2).toString(), {
      todoAdded: newTodo,
    });
    return newTodo;
  }

  @Subscription(() => Todo, {
    name: 'todoAdded',
  })
  addTodoHandler() {
    return this.pubsub.asyncIterator(this.getRandomInt(2).toString());
  }

  getRandomInt(max: number): number {
    return Math.floor(Math.random() * max);
  }
}
