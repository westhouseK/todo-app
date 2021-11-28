import { NotFoundException } from '@nestjs/common';
import { Args, Int, Query, Resolver } from '@nestjs/graphql';
import Hoge from 'src/entities/hoge';
import { HogeService } from 'src/services/hoge.service';

@Resolver(() => Hoge)
export class HogeResolver {
  constructor(private hogeService: HogeService) {}

  @Query(() => Hoge)
  async getHoge(@Args({ name: 'id', type: () => Int }) id: number) {
    const result = await this.hogeService.find(id);
    if (!result) {
      throw new NotFoundException(id);
    }
    return result;
  }
}
