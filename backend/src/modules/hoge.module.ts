import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HogeService } from 'src/services/hoge.service';
import Hoge from 'src/entities/hoge';
import { FugaModule } from './fuga.module';
import { FugaService } from 'src/services/fuga.service';
import { HogeResolver } from 'src/resolvers/hoge.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Hoge]), FugaModule],
  providers: [HogeService, HogeResolver, FugaService],
  exports: [HogeModule, TypeOrmModule],
})
export class HogeModule {}
