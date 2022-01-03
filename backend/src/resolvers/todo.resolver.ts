import { Args, Mutation, Resolver, Subscription } from '@nestjs/graphql';
import { PubSub } from 'graphql-subscriptions';
import Todo from 'src/entities/todo';
import { TodoService } from 'src/services/todo.service';

const pubSub = new PubSub();

@Resolver(() => Todo)
export class TodoResolver {
  constructor(private todoService: TodoService) {}

  @Mutation(() => Todo)
  addTodo(@Args('text', { type: () => String }) text: string) {
    const newTodo = this.todoService.create(text);
    pubSub.publish('todoAdded', { todoAdded: newTodo });
    return newTodo;
  }

  @Subscription(() => Todo, {
    name: 'todoAdded',
  })
  addTodoHandler() {
    return pubSub.asyncIterator('todoAdded');
  }
}
