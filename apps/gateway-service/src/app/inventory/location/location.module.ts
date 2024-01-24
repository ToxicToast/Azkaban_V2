import { Module } from '@nestjs/common';
import { AuthGuard } from '../../../guard/auth.guard';
import { GroupsGuard } from '../../../guard/groups.guard';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [JwtModule],
  controllers: [],
  providers: [AuthGuard, GroupsGuard],
})
export class LocationModule {}
