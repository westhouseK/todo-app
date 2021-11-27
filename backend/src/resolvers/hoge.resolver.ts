import { NotFoundException } from '@nestjs/common';
import { Args, Int, Query, Resolver } from '@nestjs/graphql';
import Hoge from 'src/entities/hoge';
import { FugaService } from 'src/services/fuga.service';
import { HogeService } from 'src/services/hoge.service';

@Resolver(() => Hoge)
export class HogeResolver {
  constructor(
    private hogeService: HogeService,
    private fugaService: FugaService,
  ) {}

  @Query(() => Hoge)
  async getHoge(@Args({ name: 'id', type: () => Int }) id: number) {
    const result = await this.hogeService.find(id);
    const test = await this.fugaService.find(id);
    console.log(result);
    console.log(test);
    if (!result) {
      throw new NotFoundException(id);
    }
    return result;
  }
}
