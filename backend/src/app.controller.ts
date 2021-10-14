import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

// データベース接続のテスト用
import { createConnection, getRepository } from 'typeorm';
import dbConfig from './config/db-config';
import Test from './entities/test';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  // DB接続確認用
  @Get('test')
  testConnection() {
    console.log('request: test');
    createConnection(dbConfig)
      .then(async (connection) => {
        console.log('Postgres Connected');
        try {
          const repository = getRepository(Test);
          const newTest = new Test('Neo');
          const log = await repository.save(newTest);
          console.log(log);
        } catch (error) {
          console.log('Fail: ', error);
        } finally {
          await connection.close();
          console.log('Connection Closed');
        }
      })
      .catch((error) => {
        console.error('Postgres Connection Failed', error);
      });
  }
}
