import { Inject, Injectable, Logger } from '@nestjs/common';
import { ClientRMQ } from '@nestjs/microservices';
import { AuthTopics, Nullable } from '@azkaban/shared';
import { Session } from '@supabase/supabase-js';

@Injectable()
export class AuthService {
  constructor(@Inject('AUTH_SERVICE') private readonly client: ClientRMQ) {}

  async registerUser(
    email: string,
    password: string,
    username: string,
    group: string,
  ): Promise<Nullable<Session>> {
    return await this.client
      .send(AuthTopics.REGISTER, { email, password, username, group })
      .toPromise();
  }

  async loginUser(email: string, password: string): Promise<Nullable<Session>> {
    return await this.client
      .send(AuthTopics.LOGIN, { email, password })
      .toPromise();
  }
}
