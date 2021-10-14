import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
} from '@nestjs/common';
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

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  findOne(@Param('id') id: number): Promise<Todo> {
    return this.service.findOne(id);
  }

  @Post('create')
  @HttpCode(HttpStatus.CREATED)
  // TODO: DTOにする
  async create(@Body() data: Todo): Promise<Todo> {
    return this.service.create(data);
  }
}
