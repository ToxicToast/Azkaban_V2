import { Controller, Sse } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { fromEvent, map, Observable } from 'rxjs';

@Controller('inventory')
export class InventoryController {
  constructor(private readonly eventEmitter: EventEmitter2) {}

  @Sse()
  onEvents(): Observable<MessageEvent> {
    return fromEvent(this.eventEmitter, 'inventory.event').pipe(
      map((data) => {
        return new MessageEvent('inventory.event', { data });
      })
    );
  }
}
