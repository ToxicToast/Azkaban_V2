import { Controller, Get } from '@nestjs/common';
import {
  HealthCheckService,
  HealthCheck,
  MicroserviceHealthIndicator,
  MemoryHealthIndicator,
} from '@nestjs/terminus';
import { ApiTags } from '@nestjs/swagger';
import { Transport } from '@nestjs/microservices';

@ApiTags('monitoring')
@Controller()
export class HealthController {
  constructor(
    private readonly health: HealthCheckService,
    private readonly microservices: MicroserviceHealthIndicator,
    private readonly memory: MemoryHealthIndicator,
  ) {}

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

  private checkHeap() {
    return [
      () =>
        this.memory.checkHeap(
          'memory_heap',
          Number(process.env.MEMORY_HEAP_TRESHOLD),
        ),
    ];
  }

  private checkRss() {
    return [
      () =>
        this.memory.checkRSS(
          'memory_rss',
          Number(process.env.MEMORY_RSS_TRESHOLD),
        ),
    ];
  }

  @Get()
  @HealthCheck()
  check() {
    return this.health.check([
      ...this.checkBroker(),
      ...this.checkHeap(),
      ...this.checkRss(),
    ]);
  }
}
