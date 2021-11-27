import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import Hoge from 'src/entities/hoge';
import { FugaService } from './fuga.service';

@Injectable()
export class HogeService {
  constructor(
    @InjectRepository(Hoge)
    private hogeRepository: Repository<Hoge>,
  ) {}
  // private a: FugaService,

  async find(id: number): Promise<Hoge> {
    // this.a.find(1);
    return this.hogeRepository.findOne(id);
  }
}
