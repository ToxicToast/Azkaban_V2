import { ApiClient } from '@twurple/api';
import { Auth } from './auth';

export class Api {
  private readonly apiClient: ApiClient;

  constructor(private readonly authProvider: Auth) {
    this.apiClient = this.initApi();
  }

  private initApi(): ApiClient {
    return new ApiClient({ authProvider: this.authProvider.instanceApp });
  }

  get instance(): ApiClient {
    return this.apiClient;
  }
}
