import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoController } from './todo/todo.controller';
import { TodoModule } from './todo/todo.module';
import Todo from './entities/todo';
import { TodoService } from './todo/todo.service';

@Module({
  imports: [
    // TypeOrmModule.forRoot({
    //   type: 'postgres',
    //   host: 'localhost',
    //   port: 5432,
    //   username: 'admin',
    //   password: 'admin',
    //   database: 'admin',
    //   synchronize: true,
    //   logging: true,
    //   logger: 'file',
    //   entities: [Todo],
    // }),
    // TodoModule,
  ],
  controllers: [AppController],
  // controllers: [AppController, TodoController],
  providers: [AppService],
  // providers: [AppService, TodoService],
})
export class AppModule {}
