import { Controller, Get } from '@nestjs/common';
import {
  HealthCheckService,
  HealthCheck,
  MemoryHealthIndicator,
  MicroserviceHealthIndicator,
} from '@nestjs/terminus';
import * as process from 'process';
import { ApiTags } from '@nestjs/swagger';
import { Transport } from '@nestjs/microservices';

@ApiTags('monitoring')
@Controller()
export class HealthController {
  constructor(
    private readonly health: HealthCheckService,
    private readonly memory: MemoryHealthIndicator,
    private readonly microservices: MicroserviceHealthIndicator
  ) {}

  private checkHeap(heapThreshold: number) {
    return [() => this.memory.checkHeap('memory_heap', heapThreshold)];
  }

  private checkRss(rssThreshold: number) {
    return [() => this.memory.checkRSS('memory_rss', rssThreshold)];
  }

  private checkBroker() {
    return [
      () =>
        this.microservices.pingCheck('rabbitmq', {
          transport: Transport.RMQ,
          options: {
            urls: [
              `amqp://${process.env.BROKER_USERNAME}:${process.env.BROKER_PASSWORD}@${process.env.BROKER_HOST}:${process.env.BROKER_PORT}`,
            ],
          },
        }),
    ];
  }

  @Get()
  @HealthCheck()
  check() {
    return this.health.check([
      ...this.checkHeap(Number(process.env.MEMORY_HEAP_TRESHOLD)),
      ...this.checkRss(Number(process.env.MEMORY_RSS_TRESHOLD)),
      ...this.checkBroker(),
    ]);
  }
}
