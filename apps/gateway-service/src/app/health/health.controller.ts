import { Controller, Get } from '@nestjs/common';
import {
  HealthCheckService,
  HealthCheck,
  MicroserviceHealthIndicator,
  MemoryHealthIndicator,
} from '@nestjs/terminus';
import { ApiTags } from '@nestjs/swagger';
import { Transport } from '@nestjs/microservices';
import * as process from 'process';

@ApiTags('monitoring')
@Controller()
export class HealthController {
  constructor(
    private readonly health: HealthCheckService,
    private readonly microservices: MicroserviceHealthIndicator,
    private readonly memory: MemoryHealthIndicator
  ) {}

  private checkKafka() {
    return [
      () =>
        this.microservices.pingCheck('kafka', {
          transport: Transport.KAFKA,
          options: {
            client: {
              brokers: [
                `${process.env.BROKER_HOST}:${process.env.BROKER_PORT}`,
              ],
            },
          },
        }),
    ];
  }

  private checkHeap() {
    return [
      () =>
        this.memory.checkHeap(
          'memory_heap',
          Number(process.env.MEMORY_HEAP_TRESHOLD)
        ),
    ];
  }

  private checkRss() {
    return [
      () =>
        this.memory.checkRSS(
          'memory_rss',
          Number(process.env.MEMORY_RSS_TRESHOLD)
        ),
    ];
  }

  @Get()
  @HealthCheck()
  check() {
    return this.health.check([
      ...this.checkKafka(),
      ...this.checkHeap(),
      ...this.checkRss(),
    ]);
  }
}
