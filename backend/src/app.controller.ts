import { Controller, Get, Session } from '@nestjs/common';
import { AppService } from './app.service';
import * as secureSession from 'fastify-secure-session';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Session() s): string {
    s.visits = s.visits ? s.visits + 1 : 1;
    console.log(s);
    return this.appService.getHello();
  }
  @Get('/a')
  sessionDemo(@Session() session: secureSession.Session) {
    const visits = session.get('visits');
    session.set('visits', visits ? visits + 1 : 1);
  }
}
