import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { MqttOptions } from '@nestjs/microservices/interfaces/microservice-configuration.interface';

export const consumerProvider = (brokerQueue: string): MicroserviceOptions => ({
  transport: Transport.RMQ,
  options: {
    queue: brokerQueue,
    queueOptions: {
      durable: true,
    },
    urls: [
      `amqp://${process.env.BROKER_USERNAME}:${process.env.BROKER_PASSWORD}@${process.env.BROKER_HOST}:${process.env.BROKER_PORT}`,
    ],
  },
});

export const clientProvider = (brokerQueue: string): MqttOptions => {
  return consumerProvider(brokerQueue) as MqttOptions;
};
