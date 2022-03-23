import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Todo } from 'entities/todo';
import { Repository } from 'typeorm';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(Todo)
    private todoRepository: Repository<Todo>,
  ) {}

  async find() {
    return this.todoRepository.find();
  }

  create(text: string) {
    const todo = this.todoRepository.create({ text, status: 1 });
    return this.todoRepository.save(todo);
  }
}
