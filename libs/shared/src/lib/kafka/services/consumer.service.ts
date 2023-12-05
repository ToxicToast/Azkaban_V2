import { Injectable, OnModuleDestroy } from '@nestjs/common';
import { ServerKafka } from '@nestjs/microservices';
import { Partitioners } from 'kafkajs';

@Injectable()
export class ConsumerService extends ServerKafka implements OnModuleDestroy {
  async onModuleDestroy(): Promise<void> {
    await super.close();
  }

  constructor() {
    super({
      client: {
        clientId: process.env.BROKER_CLIENT_ID ?? '',
        brokers: [`${process.env.BROKER_HOST}:${process.env.BROKER_PORT}`],
        retry: {
          retries: 10,
          initialRetryTime: 1,
          maxRetryTime: 30,
        },
        sasl: {
          mechanism: 'plain', // scram-sha-256 or scram-sha-512
          username: process.env.BROKER_USERNAME,
          password: process.env.BROKER_PASSWORD,
        },
      },
      consumer: {
        groupId: process.env.BROKER_GROUP_ID ?? '',
      },
      producer: {
        allowAutoTopicCreation: true,
        createPartitioner: Partitioners.DefaultPartitioner,
      },
    });
  }
}
