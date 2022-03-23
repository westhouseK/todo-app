import { QueryService, InjectQueryService } from '@nestjs-query/core';
import { CRUDResolver } from '@nestjs-query/query-graphql';
import { Resolver, Query, Args } from '@nestjs/graphql';
import { NestQueryDemoEntity } from 'entities/nest-query-demo';
import { NestQueryDemoDto } from 'interfaces/dto/nest-query-demo.dto';

@Resolver(() => NestQueryDemoDto)
export class NestQueryDemoResolver extends CRUDResolver(NestQueryDemoDto) {
  constructor(
    @InjectQueryService(NestQueryDemoEntity)
    readonly service: QueryService<NestQueryDemoEntity>,
  ) {
    super(service);
  }
}
