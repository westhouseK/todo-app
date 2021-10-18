import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
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

  @Post()
  @HttpCode(HttpStatus.CREATED)
  // TODO: DTOとEntityを両立する方法
  async create(@Body() data: Todo) {
    return this.service.create(data);
  }

  @Put(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  // TODO: DTOとEntityを両立する方法
  async update(@Param('id') id: number, @Body() data: Todo): Promise<void> {
    this.service.update(id, data);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async delete(@Param('id') id: number): Promise<void> {
    this.service.delete(id);
  }
}
