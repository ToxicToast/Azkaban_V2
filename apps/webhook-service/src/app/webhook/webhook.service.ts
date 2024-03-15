import { HttpException, Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class WebhookService {
  constructor(private readonly http: HttpService) {}

  async sendHook<TData>(url: string, data: TData): Promise<void> {
    await this.http
      .post<TData>(url, data, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .toPromise()
      .catch((err) => {
        throw new HttpException(err, 500);
      });
  }
}
