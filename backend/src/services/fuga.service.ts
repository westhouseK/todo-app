import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import Fuga from 'src/entities/fuga';

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
