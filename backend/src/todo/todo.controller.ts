import { Controller, Get, HttpCode, HttpStatus } from '@nestjs/common';
import Todo from 'src/entities/todo';
import { TodoService } from './todo.service';

@Controller('todo')
export class TodoController {
  constructor(private readonly service: TodoService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  findAll(): Promise<Todo[]> {
    return this.service.findAll();
  }
}
