import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import Todo from '../entities/todo';
import { Repository } from 'typeorm';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(Todo)
    private readonly todoRepository: Repository<Todo>,
  ) {}

  async findOne(id: number): Promise<Todo> {
    return this.todoRepository.findOne(id);
  }

  async findAll(): Promise<Todo[]> {
    return this.todoRepository.find();
  }

  async create(data: Partial<Todo>) {
    return this.todoRepository.save(data);
  }

  async update(id: number, data: Partial<Todo>) {
    const target = this.findOne(id);
    const updatedTodo = Object.assign(target, data);
    return this.todoRepository.save(updatedTodo);
  }

  async delete(id: number): Promise<void> {
    const target = await this.todoRepository.findOne(id);
    this.todoRepository.remove(target);
  }
}
