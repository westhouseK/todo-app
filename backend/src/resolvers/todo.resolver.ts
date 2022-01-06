import { Inject } from '@nestjs/common';
import { Args, Mutation, Resolver, Subscription } from '@nestjs/graphql';
import { PubSub } from 'graphql-subscriptions';
import { Text } from 'src/decorators/text.decorator';
import Todo from 'src/entities/todo';
import { TodoService } from 'src/services/todo.service';

@Resolver(() => Todo)
export class TodoResolver {
  constructor(
    private todoService: TodoService,
    @Inject('PUB_SUB') private pubsub: PubSub,
  ) {}

  @Mutation(() => Todo)
  addTodo(@Args('text', { type: () => String }) @Text('text') text: string) {
    const newTodo = this.todoService.create(text);
    this.pubsub.publish('todoAdded', { todoAdded: newTodo });
    return newTodo;
  }

  @Subscription(() => Todo, {
    name: 'todoAdded',
  })
  addTodoHandler() {
    return this.pubsub.asyncIterator('todoAdded');
  }
}
