import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';
import { Module } from '@nestjs/common';
import { NestQueryDemoEntity } from 'entities/nest-query-demo';
import { NestQueryDemoDto } from 'interfaces/dto/nest-query-demo.dto';
// リゾルバーをここに定義したい場合
import { NestQueryDemoResolver } from 'resolvers/nest-query-demo.resolver';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([NestQueryDemoEntity])],
      resolvers: [
        { DTOClass: NestQueryDemoDto, EntityClass: NestQueryDemoEntity },
      ],
    }),
  ],
})
export class NestQueryDemoModule {}
