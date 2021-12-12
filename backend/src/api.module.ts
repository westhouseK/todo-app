import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import Hoge from './entities/hoge';
import { HogeModule } from './modules/hoge.module';
import { HogeResolver } from './resolvers/hoge.resolver';
import { FugaService } from './services/fuga.service';
import { HogeService } from './services/hoge.service';

@Module({
  imports: [TypeOrmModule.forFeature([Hoge]), HogeModule],
  exports: [ApiModule, TypeOrmModule],
})
export class ApiModule {}
