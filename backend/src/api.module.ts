import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import Hoge from './entities/hoge';
import { HogeResolver } from './resolvers/hoge.resolver';
import { HogeService } from './services/hoge.service';

@Module({
  imports: [TypeOrmModule.forFeature([Hoge])],
  providers: [HogeResolver, HogeService],
  exports: [ApiModule, TypeOrmModule],
})
export class ApiModule {}
