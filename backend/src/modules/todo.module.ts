import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoResolver } from 'src/resolvers/todo.resolver';
import Todo from 'src/entities/todo';
import { TodoService } from 'src/services/todo.service';
import { PubSub } from 'graphql-subscriptions';

@Module({
  imports: [TypeOrmModule.forFeature([Todo])],
  providers: [
    TodoService,
    TodoResolver,
    {
      provide: 'PUB_SUB',
      useValue: new PubSub(),
    },
  ],
  exports: [TodoModule, TypeOrmModule],
})
export class TodoModule {}
