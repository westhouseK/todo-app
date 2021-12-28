import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import Hoge from './entities/hoge';
import { HogeModule } from './modules/hoge.module';

@Module({
  imports: [TypeOrmModule.forFeature([Hoge]), HogeModule],
  exports: [ApiModule, TypeOrmModule],
})
export class ApiModule {}
