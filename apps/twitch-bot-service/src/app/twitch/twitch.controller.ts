import {
  BeforeApplicationShutdown,
  Controller,
  Logger,
  OnModuleDestroy,
  OnModuleInit,
} from '@nestjs/common';

import { TwitchService } from './twitch.service';
import { Events } from '@azkaban/shared';
import { ApiTags } from '@nestjs/swagger';
import {
  ActionData,
  AnnouncementData,
  AuthenticationFailureData,
  AuthenticationSuccessData,
  BanData,
  BitsBadgeUpgradeData,
  ChatClearData,
  CommunityPayForwardData,
  CommunitySubData,
  EmoteOnlyData,
  FollowersOnlyData,
  GiftPaidUpgradeData,
  JoinData,
  JoinFailureData,
  MessageData,
  MessageFailedData,
  MessageRatelimitData,
  MessageRemoveData,
  NoPermissionData,
  PartData,
  PrimeCommunityGiftData,
  PrimePaidUpgradeData,
  RaidCancelData,
  RaidData,
  ResubData,
  RewardGiftData,
  RitualData,
  SlowData,
  StandardPayForwardData,
  SubData,
  SubExtendData,
  SubGiftData,
  SubsOnlyData,
  TimeoutData,
  TokenFetchFailureData,
  UniqueChatData,
  WhisperData,
} from '@azkaban/toasty-events';

@ApiTags('twitch')
@Controller()
export class TwitchController
  implements OnModuleInit, OnModuleDestroy, BeforeApplicationShutdown
{
  constructor(private readonly twitchService: TwitchService) {}

  private async onTwitchEvent<TData>(
    eventName: Events,
    endpoint: string
  ): Promise<void> {
    this.twitchService.toasty.addPlugin<TData>({
      name: `Broker-${eventName.charAt(0).toUpperCase() + eventName.slice(1)}`,
      event: eventName,
      execute: async (data) => {
        await this.twitchService.emitEvent<TData>(`twitch.${endpoint}`, data);
      },
    });
  }

  async onModuleInit(): Promise<void> {
    await this.onTwitchEvent<JoinData>(Events.JOIN, 'join');
    await this.onTwitchEvent<PartData>(Events.PART, 'part');
    await this.onTwitchEvent<MessageData>(Events.MESSAGE, 'message');
    await this.onTwitchEvent<TimeoutData>(Events.TIMEOUT, 'timeout');
    await this.onTwitchEvent<BanData>(Events.BAN, 'ban');
    await this.onTwitchEvent<BitsBadgeUpgradeData>(
      Events.BITSBADGEUPGRADE,
      'bitsbadgeupgrade'
    );
    await this.onTwitchEvent<ChatClearData>(Events.CHATCLEAR, 'chatclear');
    await this.onTwitchEvent<EmoteOnlyData>(Events.EMOTEONLY, 'emoteonly');
    await this.onTwitchEvent<FollowersOnlyData>(
      Events.FOLLOWERSONLY,
      'followersonly'
    );
    await this.onTwitchEvent<JoinFailureData>(
      Events.JOINFAILURE,
      'joinfailure'
    );
    await this.onTwitchEvent<MessageRemoveData>(
      Events.MESSAGEREMOVE,
      'messageremove'
    );
    await this.onTwitchEvent<UniqueChatData>(Events.UNIQUECHAT, 'uniquechat');
    await this.onTwitchEvent<RaidData>(Events.RAID, 'raid');
    await this.onTwitchEvent<RaidCancelData>(Events.RAIDCANCEL, 'raidcancel');
    await this.onTwitchEvent<RitualData>(Events.RITUAL, 'ritual');
    await this.onTwitchEvent<SlowData>(Events.SLOW, 'slow');
    await this.onTwitchEvent<SubsOnlyData>(Events.SUBSONLY, 'subsonly');
    await this.onTwitchEvent<SubData>(Events.SUB, 'sub');
    await this.onTwitchEvent<ResubData>(Events.RESUB, 'resub');
    await this.onTwitchEvent<SubGiftData>(Events.SUBGIFT, 'subgift');
    await this.onTwitchEvent<CommunitySubData>(
      Events.COMMUNITYSUB,
      'communitysub'
    );
    await this.onTwitchEvent<SubExtendData>(Events.SUBEXTEND, 'subextend');
    await this.onTwitchEvent<RewardGiftData>(Events.REWARDGIFT, 'rewardgift');
    await this.onTwitchEvent<PrimePaidUpgradeData>(
      Events.PRIMEPAIDUPGRADE,
      'primepaidupgrade'
    );
    await this.onTwitchEvent<GiftPaidUpgradeData>(
      Events.GIFTPAIDUPGRADE,
      'giftpaidupgrade'
    );
    await this.onTwitchEvent<PrimeCommunityGiftData>(
      Events.PRIMECOMMUNITYGIFT,
      'primecommunitygift'
    );
    await this.onTwitchEvent<StandardPayForwardData>(
      Events.STANDARDPAYFORWARD,
      'standardpayforward'
    );
    await this.onTwitchEvent<CommunityPayForwardData>(
      Events.COMMUNITYPAYFORWARD,
      'communitypayforward'
    );
    await this.onTwitchEvent<AnnouncementData>(
      Events.ANNOUNCEMENT,
      'announcement'
    );
    await this.onTwitchEvent<WhisperData>(Events.WHISPER, 'whisper');
    await this.onTwitchEvent<NoPermissionData>(
      Events.NOPERMISSION,
      'nopermission'
    );
    await this.onTwitchEvent<MessageRatelimitData>(
      Events.MESSAGERATELIMIT,
      'messageratelimit'
    );
    await this.onTwitchEvent<AuthenticationSuccessData>(
      Events.AUTHENTICATIONSUCCESS,
      'authenticationsuccess'
    );
    await this.onTwitchEvent<AuthenticationFailureData>(
      Events.AUTHENTICATIONFAILURE,
      'authenticationfailure'
    );
    await this.onTwitchEvent<TokenFetchFailureData>(
      Events.TOKENFETCHFAILURE,
      'tokenfetchfailure'
    );
    await this.onTwitchEvent<MessageFailedData>(
      Events.MESSAGEFAILED,
      'messagefailed'
    );
    await this.onTwitchEvent<ActionData>(Events.ACTION, 'action');

    this.twitchService.toasty.initBot();
  }

  async onModuleDestroy(): Promise<void> {
    this.twitchService.toasty.stopBot();
  }

  async beforeApplicationShutdown(signal?: string): Promise<void> {
    Logger.debug(`Shutting down Twitch Bot: ${signal}`);
    this.twitchService.toasty.stopBot();
  }
}
