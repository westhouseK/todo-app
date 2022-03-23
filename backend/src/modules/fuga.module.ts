import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Fuga } from '../entities/fuga';

@Module({
  imports: [TypeOrmModule.forFeature([Fuga])],
  exports: [FugaModule, TypeOrmModule],
})
export class FugaModule {}
