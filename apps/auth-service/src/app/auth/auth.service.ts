import { Injectable, Logger } from '@nestjs/common';
import {
  AuthResponse,
  createClient,
  SupabaseClient,
  UserResponse,
} from '@supabase/supabase-js';

@Injectable()
export class AuthService {
  private readonly supabase: SupabaseClient = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_KEY,
  );

  async registerUser(
    email: string,
    password: string,
    username: string,
    group: string,
  ): Promise<AuthResponse> {
    return await this.supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          username,
          groups: [group],
        },
      },
    });
  }

  async loginUser(email: string, password: string): Promise<AuthResponse> {
    return await this.supabase.auth.signInWithPassword({
      email,
      password,
    });
  }

  async getUserProfile() {
    const currentUserId = await this.supabase.auth
      .getUser()
      .catch((error) => {
        Logger.error(error.message, error.stack, 'AuthService');
      })
      .then((data) => {
        const userResponse = data as UserResponse;
        return userResponse.data?.user?.id;
      });
    return this.supabase
      .from('profiles')
      .select(`username, avatar_url`)
      .eq('id', currentUserId)
      .limit(1);
  }
}
