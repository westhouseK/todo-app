import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Hoge } from 'entities/hoge';
import { NestQueryDemoModule } from 'modules/nest-query-demo.module';
import { HogeModule } from './modules/hoge.module';
import { TodoModule } from './modules/todo.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Hoge]),
    HogeModule,
    TodoModule,
    NestQueryDemoModule,
  ],
  exports: [ApiModule, TypeOrmModule],
})
export class ApiModule {}
