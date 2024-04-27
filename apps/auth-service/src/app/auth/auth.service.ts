import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class AuthService {
  async registerUser(
    email: string,
    password: string,
    username: string,
    group: string,
  ): Promise<void> {
    Logger.debug({ email, password, username, group }, 'RegisterUser');
  }

  async loginUser(email: string, password: string): Promise<void> {
    Logger.debug({ email, password }, 'LoginUser');
  }
}
