import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FugaService } from 'src/services/fuga.service';
import Fuga from 'src/entities/fuga';

@Module({
  imports: [TypeOrmModule.forFeature([Fuga])],
  providers: [FugaService],
  exports: [FugaModule, TypeOrmModule],
})
export class FugaModule {}
