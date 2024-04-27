import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

@Injectable()
export class GroupsGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    // TODO: Implement the Auth Service
    return true;
    /*
    const groups = this.reflector.get<string[]>('groups', context.getHandler());
    if (!groups) {
      return false;
    }
    const request = context.switchToHttp().getRequest();
    const user = request.user;
    const userMetaData = user?.user_metadata ?? null;
    const userGroups = userMetaData?.groups ?? [];
    return groups.some((group) => {
      return userGroups.includes(group);
    });
     */
  }
}
