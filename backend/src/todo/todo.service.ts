import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import Todo from '../entities/todo';
import { Repository } from 'typeorm';

@Injectable()
export class TodoService {
  // private readonly logger = new Logger();

  constructor(
    @InjectRepository(Todo)
    private readonly todoRepository: Repository<Todo>,
  ) {}

  async findOne(id: number): Promise<Todo> {
    const todo = await this.todoRepository.findOne(id);
    Logger.debug(todo);
    return todo;
  }

  async findAll(): Promise<Todo[]> {
    return this.todoRepository.find();
  }

  async create(data: Partial<Todo>) {
    return this.todoRepository.save(data);
  }

  async update(id: number, data: Partial<Todo>) {
    const target = await this.findOne(id);
    const updatedTodo = Object.assign(target, data);
    // TODO: IDが存在しない場合のハンドリング
    this.todoRepository.save(updatedTodo);
  }

  async delete(id: number): Promise<void> {
    const target = await this.findOne(id);
    this.todoRepository.remove(target);
  }
}
