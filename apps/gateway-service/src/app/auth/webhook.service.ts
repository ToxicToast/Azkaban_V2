import { Inject, Injectable } from '@nestjs/common';
import { ClientRMQ } from '@nestjs/microservices';
import { WebhookAuthTopics } from '@azkaban/shared';

@Injectable()
export class AuthWebhookService {
  constructor(@Inject('WEBHOOK_SERVICE') private readonly webhook: ClientRMQ) {}

  onUserLogin(username: string): void {
    this.webhook.emit(WebhookAuthTopics.USERLOGIN, username).toPromise();
  }
}
