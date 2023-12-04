import {
  ClientOptions,
  MicroserviceOptions,
  Transport,
} from '@nestjs/microservices';
import { Partitioners } from 'kafkajs';

export const consumerProvider: MicroserviceOptions = {
  transport: Transport.KAFKA,
  options: {
    client: {
      clientId: process.env.BROKER_CLIENT_ID ?? '',
      brokers: [`${process.env.BROKER_HOST}:${process.env.BROKER_PORT}`],
      retry: {
        retries: 10,
        initialRetryTime: 1,
        maxRetryTime: 30,
      },
    },
    consumer: {
      groupId: process.env.BROKER_GROUP_ID ?? '',
    },
    producer: {
      allowAutoTopicCreation: true,
      createPartitioner: Partitioners.DefaultPartitioner,
    },
  },
};

export const clientProvider: ClientOptions = {
  ...consumerProvider,
};
