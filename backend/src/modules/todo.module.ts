import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as Redis from 'ioredis';
import { RedisPubSub } from 'graphql-redis-subscriptions';
import { Todo } from 'entities/todo';
import { TodoService } from 'services/todo.service';
import { TodoResolver } from 'resolvers/todo.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Todo])],
  providers: [
    TodoService,
    TodoResolver,
    {
      provide: 'PUB_SUB',
      useFactory: () => {
        const options = {
          host: 're',
          port: 6379,
        };
        return new RedisPubSub({
          publisher: new Redis(options),
          subscriber: new Redis(options),
        });
      },
    },
  ],
  exports: [TodoModule, TypeOrmModule],
})
export class TodoModule {}
