import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Hoge } from 'entities/hoge';
import { Repository } from 'typeorm';
import { FugaService } from './fuga.service';

@Injectable()
export class HogeService {
  constructor(
    @InjectRepository(Hoge)
    private hogeRepository: Repository<Hoge>,
    private fugaService: FugaService,
  ) {}

  async find(id: number): Promise<Hoge> {
    const fuga = await this.fugaService.find(1);
    return this.hogeRepository.findOne(id);
  }
}
