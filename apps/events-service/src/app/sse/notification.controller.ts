import { Body, Controller, Post, Sse } from '@nestjs/common';
import { Observable, Subject } from 'rxjs';
import {
  CategoryDao,
  CompanyDao,
  ItemDao,
  LocationDao,
  SizeDao,
  TypeDao,
} from '@azkaban/inventory-infrastructure';

@Controller('notification')
export class NotificationController {
  private readonly events$ = new Subject<MessageEvent>();

  @Sse()
  onEvents(): Observable<MessageEvent> {
    return this.events$.asObservable();
  }

  @Post('event')
  onAddEvent(@Body() body: { event: string; data: unknown }) {
    const { event, data } = body;
    //
    if (event === 'inventory-category') {
      this.onInventoryCategoryCreated(data as CategoryDao);
    }
    if (event === 'inventory-company') {
      this.onInventoryCompanyCreated(data as CompanyDao);
    }
    if (event === 'inventory-item') {
      this.onInventoryItemCreated(data as ItemDao);
    }
    if (event === 'inventory-location') {
      this.onInventoryLocationCreated(data as LocationDao);
    }
    if (event === 'inventory-size') {
      this.onInventorySizeCreated(data as SizeDao);
    }
    if (event === 'inventory-type') {
      this.onInventoryTypeCreated(data as TypeDao);
    }
  }

  private onInventoryCategoryCreated(data: CategoryDao): void {
    const messageEvent = new MessageEvent('inventory-category-created', {
      data: {
        id: data.id,
        title: data.title,
        created_at: data.created_at,
      },
    });
    this.events$.next(messageEvent);
  }

  private onInventoryCompanyCreated(data: CompanyDao): void {
    const messageEvent = new MessageEvent('inventory-company-created', {
      data: {
        id: data.id,
        title: data.title,
        created_at: data.created_at,
      },
    });
    this.events$.next(messageEvent);
  }

  private onInventoryItemCreated(data: ItemDao): void {
    const messageEvent = new MessageEvent('inventory-item-created', {
      data: {
        id: data.id,
        title: data.title,
        created_at: data.created_at,
      },
    });
    this.events$.next(messageEvent);
  }

  private onInventoryLocationCreated(data: LocationDao): void {
    const messageEvent = new MessageEvent('inventory-location-created', {
      data: {
        id: data.id,
        title: data.title,
        created_at: data.created_at,
      },
    });
    this.events$.next(messageEvent);
  }

  private onInventorySizeCreated(data: SizeDao): void {
    const messageEvent = new MessageEvent('inventory-size-created', {
      data: {
        id: data.id,
        title: data.title,
        created_at: data.created_at,
      },
    });
    this.events$.next(messageEvent);
  }

  private onInventoryTypeCreated(data: TypeDao): void {
    const messageEvent = new MessageEvent('inventory-type-created', {
      data: {
        id: data.id,
        title: data.title,
        created_at: data.created_at,
      },
    });
    this.events$.next(messageEvent);
  }
}
