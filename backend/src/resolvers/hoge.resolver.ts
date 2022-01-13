import { NotFoundException, Session } from '@nestjs/common';
import { Args, Int, Query, Resolver } from '@nestjs/graphql';
import Hoge from 'src/entities/hoge';
import { HogeService } from 'src/services/hoge.service';
import * as secureSession from 'fastify-secure-session';

@Resolver(() => Hoge)
export class HogeResolver {
  constructor(private hogeService: HogeService) {}

  @Query(() => Hoge)
  async getHoge(
    @Args({ name: 'id', type: () => Int }) id: number,
    @Session() session: secureSession.Session,
  ) {
    console.log(session);
    const visits = session.get('visits');
    session.set('visits', visits ? visits + 1 : 1);
    console.log(visits);
    const result = await this.hogeService.find(id);
    if (!result) {
      throw new NotFoundException(id);
    }
    return result;
  }
}
