import { ChatClient } from '@twurple/chat';
import { Events, Plugin } from '@azkaban/shared';
import { Logger } from '@nestjs/common';
import {
  ActionEvent,
  AnnouncementEvent,
  AuthenticationFailureEvent,
  AuthenticationSuccessEvent,
  BanEvent,
  BitsBadgeUpgradeEvent,
  ChatClearEvent,
  CommunityPayForwardEvent,
  CommunitySubEvent,
  EmoteOnlyEvent,
  FollowersOnlyEvent,
  GiftPaidUpgradeEvent,
  JoinEvent,
  JoinFailureEvent,
  MessageEvent,
  MessageFailedEvent,
  MessageRatelimitEvent,
  MessageRemoveEvent,
  NoPermissionEvent,
  PartEvent,
  PrimeCommunityGiftEvent,
  PrimePaidUpgradeEvent,
  RaidCancelEvent,
  RaidEvent,
  ResubEvent,
  RewardGiftEvent,
  RitualEvent,
  SlowEvent,
  StandardPayForwardEvent,
  SubEvent,
  SubExtendEvent,
  SubGiftEvent,
  SubsOnlyEvent,
  TimeoutEvent,
  TokenFetchFailureEvent,
  UniqueChatEvent,
  WhisperEvent,
} from './core';

export function PluginLoader(
  chatProvider: ChatClient,
  plugin: Plugin<unknown>
): void {
  const { event } = plugin;

  switch (event) {
    case Events.JOIN:
      JoinEvent(chatProvider, plugin.execute);
      break;

    case Events.PART:
      PartEvent(chatProvider, plugin.execute);
      break;

    case Events.MESSAGE:
      MessageEvent(chatProvider, plugin.execute);
      break;

    case Events.TIMEOUT:
      TimeoutEvent(chatProvider, plugin.execute);
      break;

    case Events.BAN:
      BanEvent(chatProvider, plugin.execute);
      break;

    case Events.BITSBADGEUPGRADE:
      BitsBadgeUpgradeEvent(chatProvider, plugin.execute);
      break;

    case Events.CHATCLEAR:
      ChatClearEvent(chatProvider, plugin.execute);
      break;

    case Events.EMOTEONLY:
      EmoteOnlyEvent(chatProvider, plugin.execute);
      break;

    case Events.FOLLOWERSONLY:
      FollowersOnlyEvent(chatProvider, plugin.execute);
      break;

    case Events.JOINFAILURE:
      JoinFailureEvent(chatProvider, plugin.execute);
      break;

    case Events.MESSAGEREMOVE:
      MessageRemoveEvent(chatProvider, plugin.execute);
      break;

    case Events.UNIQUECHAT:
      UniqueChatEvent(chatProvider, plugin.execute);
      break;

    case Events.RAID:
      RaidEvent(chatProvider, plugin.execute);
      break;

    case Events.RAIDCANCEL:
      RaidCancelEvent(chatProvider, plugin.execute);
      break;

    case Events.RITUAL:
      RitualEvent(chatProvider, plugin.execute);
      break;

    case Events.SLOW:
      SlowEvent(chatProvider, plugin.execute);
      break;

    case Events.SUBSONLY:
      SubsOnlyEvent(chatProvider, plugin.execute);
      break;

    case Events.SUB:
      SubEvent(chatProvider, plugin.execute);
      break;

    case Events.RESUB:
      ResubEvent(chatProvider, plugin.execute);
      break;

    case Events.SUBGIFT:
      SubGiftEvent(chatProvider, plugin.execute);
      break;

    case Events.COMMUNITYSUB:
      CommunitySubEvent(chatProvider, plugin.execute);
      break;

    case Events.SUBEXTEND:
      SubExtendEvent(chatProvider, plugin.execute);
      break;

    case Events.REWARDGIFT:
      RewardGiftEvent(chatProvider, plugin.execute);
      break;

    case Events.PRIMEPAIDUPGRADE:
      PrimePaidUpgradeEvent(chatProvider, plugin.execute);
      break;

    case Events.GIFTPAIDUPGRADE:
      GiftPaidUpgradeEvent(chatProvider, plugin.execute);
      break;

    case Events.PRIMECOMMUNITYGIFT:
      PrimeCommunityGiftEvent(chatProvider, plugin.execute);
      break;

    case Events.STANDARDPAYFORWARD:
      StandardPayForwardEvent(chatProvider, plugin.execute);
      break;

    case Events.COMMUNITYPAYFORWARD:
      CommunityPayForwardEvent(chatProvider, plugin.execute);
      break;

    case Events.ANNOUNCEMENT:
      AnnouncementEvent(chatProvider, plugin.execute);
      break;

    case Events.WHISPER:
      WhisperEvent(chatProvider, plugin.execute);
      break;

    case Events.NOPERMISSION:
      NoPermissionEvent(chatProvider, plugin.execute);
      break;

    case Events.MESSAGERATELIMIT:
      MessageRatelimitEvent(chatProvider, plugin.execute);
      break;

    case Events.AUTHENTICATIONSUCCESS:
      AuthenticationSuccessEvent(chatProvider, plugin.execute);
      break;

    case Events.AUTHENTICATIONFAILURE:
      AuthenticationFailureEvent(chatProvider, plugin.execute);
      break;

    case Events.TOKENFETCHFAILURE:
      TokenFetchFailureEvent(chatProvider, plugin.execute);
      break;

    case Events.MESSAGEFAILED:
      MessageFailedEvent(chatProvider, plugin.execute);
      break;

    case Events.ACTION:
      ActionEvent(chatProvider, plugin.execute);
      break;

    default:
      Logger.error(`Event ${event} not found`);
      break;
  }
}
