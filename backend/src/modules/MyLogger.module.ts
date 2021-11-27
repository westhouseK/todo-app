import { Module } from '@nestjs/common';
import { MyLoggerService } from '../services/myLogger.service';

@Module({
  providers: [MyLoggerService],
  exports: [MyLoggerService],
})
export class MyLoggerModule {}
