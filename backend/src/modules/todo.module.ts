import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoResolver } from 'src/resolvers/todo.resolver';
import Todo from 'src/entities/todo';
import { TodoService } from 'src/services/todo.service';

@Module({
  imports: [TypeOrmModule.forFeature([Todo])],
  providers: [TodoService, TodoResolver],
  exports: [TodoModule, TypeOrmModule],
})
export class TodoModule {}
