import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import Fuga from './entities/fuga';
import Hoge from './entities/hoge';
import { FugaModule } from './modules/fuga.module';
import { HogeResolver } from './resolvers/hoge.resolver';
import { FugaService } from './services/fuga.service';
import { HogeService } from './services/hoge.service';

@Module({
  imports: [TypeOrmModule.forFeature([Hoge, Fuga])],
  providers: [HogeResolver, HogeService, FugaService],
  exports: [ApiModule, TypeOrmModule],
})
export class ApiModule {}
