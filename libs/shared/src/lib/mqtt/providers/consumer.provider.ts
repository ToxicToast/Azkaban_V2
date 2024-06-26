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
    noAck: process.env.BROKER_ACK === 'yes' ? true : false,
    maxConnectionAttempts: 3,
    socketOptions: {
      reconnectTimeInSeconds: 5,
    },
  },
});

export const clientProvider = (brokerQueue: string): MqttOptions => {
  return consumerProvider(brokerQueue) as MqttOptions;
};
