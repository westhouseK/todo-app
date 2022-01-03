import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import Hoge from './entities/hoge';
import { HogeModule } from './modules/hoge.module';
import { TodoModule } from './modules/todo.module';

@Module({
  imports: [TypeOrmModule.forFeature([Hoge]), HogeModule, TodoModule],
  exports: [ApiModule, TypeOrmModule],
})
export class ApiModule {}
