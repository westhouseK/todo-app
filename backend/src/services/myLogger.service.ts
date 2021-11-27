import { LoggerService } from '@nestjs/common';
import { createLogger, format, Logger, transports } from 'winston';

export class MyLoggerService implements LoggerService {
  logger: Logger;

  constructor() {
    this.logger = createLogger({
      level: 'info',
      format: format.combine(format.timestamp(), format.json()),
      defaultMeta: { service: 'user-service' },
      transports: [
        //
        // - Write all logs with level `error` and below to `error.log`
        // - Write all logs with level `info` and below to `combined.log`
        //
        // new transports.File({ filename: 'src/log/app/debug.log', level: 'debug' }),
        new transports.Console({ level: 'debug' }),
        new transports.File({ filename: 'src/log/app/combined.log' }),
      ],
    });
  }

  log(message: string) {
    this.logger.info(message);
  }

  error(message: string, trace: string) {
    this.logger.error(message, trace);
  }

  warn(message: string) {
    this.logger.warn(message);
  }

  debug(message: string) {
    this.logger.debug(message);
  }

  verbose(message: string) {
    this.logger.verbose(message);
  }
}
