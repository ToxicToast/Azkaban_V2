import { Inject, Injectable } from '@nestjs/common';
import { InventoryReceipeTopics } from '@azkaban/shared';
import { readFile } from 'fs/promises';
import { ClientRMQ } from '@nestjs/microservices';

@Injectable()
export class ReceipeService {
  constructor(@Inject('RECEIPE_SERVICE') private readonly client: ClientRMQ) {}

  async emitOcr(filePath: string): Promise<void> {
    const file = await readFile(filePath, 'base64');

    await this.client
      .emit<string, string>(InventoryReceipeTopics.OCR, file)
      .toPromise();
  }
}
