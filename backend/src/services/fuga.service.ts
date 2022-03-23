import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Fuga } from '../entities/fuga';
import { Repository } from 'typeorm';

@Injectable()
export class FugaService {
  constructor(
    @InjectRepository(Fuga)
    private fugaRepository: Repository<Fuga>,
  ) {}

  async find(id: number): Promise<Fuga> {
    return this.fugaRepository.findOne(id);
  }
}
