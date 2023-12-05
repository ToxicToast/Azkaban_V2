import { Injectable, OnModuleDestroy } from '@nestjs/common';
import { ServerRMQ } from '@nestjs/microservices';

@Injectable()
export class ConsumerService extends ServerRMQ implements OnModuleDestroy {
  async onModuleDestroy(): Promise<void> {
    await super.close();
  }

  constructor() {
    super({
      urls: [
        `amqp://${process.env.BROKER_USERNAME}:${process.env.BROKER_PASSWORD}@${process.env.BROKER_HOST}:${process.env.BROKER_PORT}`,
      ],
    });
  }
}
