import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// import { RedisIoAdapter } from './adapters/redis-io.adapter';

import { PubSub } from 'graphql-subscriptions';
(async () => {
  const pubsub = new PubSub();

  // トリガ名(メッセージの種類を決めるイベントハンドラ名みたいなもの)を指定して
  // AsyncIterator というなんか難しいものを作成する
  const iterator = pubsub.asyncIterator('something_changed');

  // 500ms ごとに publish する
  setInterval(() => {
    pubsub.publish('something_changed', { somethingChanged: { id: '123' } });
  }, 500);

  // とりあえず 10 回読み取ってみる (*˘꒳˘*) 残りはしらない
  for (let i = 0; i < 10; i++) {
    iterator.next().then(console.log);
  }
})();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.useWebSocketAdapter(new RedisIoAdapter(app));
  await app.listen(3000);
}
bootstrap();
