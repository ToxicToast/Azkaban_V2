import { ChatClient } from '@twurple/chat';
import { Events, Plugin } from '@azkaban/shared';
import { Logger } from '@nestjs/common';
import { Join } from './join.event';
import { Part } from './part.event';
import { Message } from './message.event';

export function PluginLoader(
  chatProvider: ChatClient,
  plugin: Plugin<unknown>
): void {
  const { event } = plugin;

  switch (event) {
    case Events.JOIN:
      Join(chatProvider, plugin.execute);
      break;

    case Events.PART:
      Part(chatProvider, plugin.execute);
      break;

    case Events.MESSAGE:
      Message(chatProvider, plugin.execute);
      break;

    default:
      Logger.error(`Event ${event} not found`);
      break;
  }
}
