import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const Text = createParamDecorator(
  (data: unknown, req: ExecutionContext) => {
    console.log(data);
    console.log(req['text']);

    const request = req;
    return;
  },
);
