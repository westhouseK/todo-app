import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import Todo from 'src/entities/todo';
import { TodoController } from './todo.controller';
import { TodoService } from './todo.service';

@Module({
  imports: [TypeOrmModule.forFeature([Todo])],
  exports: [TypeOrmModule],
  providers: [TodoService],
  controllers: [TodoController],
})
export class TodoModule {}
