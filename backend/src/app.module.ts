import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoController } from './todo/todo.controller';
import { TodoModule } from './todo/todo.module';
import { TodoService } from './todo/todo.service';
import { MyLoggerService } from './my-logger/my-logger.service';
import { MyLoggerModule } from './my-logger/my-logger.module';
import dbConfig from './config/db-config';

@Module({
  imports: [TypeOrmModule.forRoot(dbConfig), TodoModule, MyLoggerModule],
  controllers: [AppController, TodoController],
  providers: [AppService, TodoService, MyLoggerService],
})
export class AppModule {}
