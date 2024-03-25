import { Controller, Get } from '@nestjs/common';
import {
  HealthCheckService,
  HealthCheck,
  MemoryHealthIndicator,
} from '@nestjs/terminus';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('monitoring')
@Controller()
export class HealthController {
  constructor(
    private readonly health: HealthCheckService,
    private readonly memory: MemoryHealthIndicator,
  ) {}

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
    return this.health.check([...this.checkHeap(), ...this.checkRss()]);
  }
}
