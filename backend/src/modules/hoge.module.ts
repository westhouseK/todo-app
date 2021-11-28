import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FugaService } from 'src/services/fuga.service';
import Hoge from 'src/entities/hoge';

@Module({
  imports: [TypeOrmModule.forFeature([Hoge])],
  providers: [FugaService],
  exports: [FugaModule, TypeOrmModule],
})
export class FugaModule {}
