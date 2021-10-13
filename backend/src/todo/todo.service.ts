import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import Todo from '../entities/todo';
import { Repository } from 'typeorm';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(Todo)
    private readonly repository: Repository<Todo>,
  ) {}

  async findAll(): Promise<Todo[]> {
    return this.repository.find();
  }
}
