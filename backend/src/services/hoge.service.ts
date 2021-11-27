import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import Hoge from 'src/entities/hoge';

@Injectable()
export class HogeService {
  constructor(
    @InjectRepository(Hoge)
    private hogeRepository: Repository<Hoge>,
  ) {}

  async find(id: number): Promise<Hoge> {
    return this.hogeRepository.findOne(id);
  }
}
