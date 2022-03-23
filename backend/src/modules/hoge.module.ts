import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FugaModule } from './fuga.module';
import { Hoge } from 'entities/hoge';
import { HogeService } from 'services/hoge.service';
import { HogeResolver } from 'resolvers/hoge.resolver';
import { FugaService } from 'services/fuga.service';

@Module({
  imports: [TypeOrmModule.forFeature([Hoge]), FugaModule],
  providers: [HogeService, HogeResolver, FugaService],
  exports: [HogeModule, TypeOrmModule],
})
export class HogeModule {}
