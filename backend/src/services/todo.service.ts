import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import Todo from 'src/entities/todo';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(Todo)
    private todoRepository: Repository<Todo>,
  ) {}

  create(text: string) {
    const todo = this.todoRepository.create({ text, status: 1 });
    return this.todoRepository.save(todo);
  }
}
