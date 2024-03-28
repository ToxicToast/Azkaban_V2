import express from 'express';
import { EventSubMiddleware } from '@twurple/eventsub-http';
import { Bot } from '@azkaban/toasty';
import * as process from 'process';

const app = express();
const botClient = new Bot({
  authentication: {
    userId: process.env.TWITCH_USER_ID,
    clientId: process.env.TWITCH_CLIENT_ID,
    clientSecret: process.env.TWITCH_CLIENT_SECRET,
    accessToken: process.env.TWITCH_ACCESS_TOKEN,
    refreshToken: process.env.TWITCH_REFRESH_TOKEN,
    botOnly: true,
  },
  channels: [],
});
const apiClient = botClient.api.instance;
const middleware = new EventSubMiddleware({
  apiClient,
  secret: process.env.TWITCH_EVENTSUB_SECRET,
  hostName: process.env.TWITCH_HOSTNAME,
  pathPrefix: '/twitch',
});

middleware.apply(app);
const port = process.env.PORT || 3011;
const server = app.listen(port, async () => {
  await middleware.markAsReady();
  //
  const streamonline = middleware.onStreamOnline(
    process.env.TWITCH_USER_ID,
    async (stream) => {
      try {
        const broadcaster = await stream.getBroadcaster();
        const streamData = await stream.getStream();
        console.debug(
          `Stream Online:`,
          broadcaster?.displayName ?? 'No DisplayName',
          streamData?.title ?? 'No Title',
        );
      } catch (e) {
        console.error(e);
      }
    },
  );
  console.error(await streamonline.getCliTestCommand());
  //
  const streamoffline = middleware.onStreamOffline(
    process.env.TWITCH_USER_ID,
    async (stream) => {
      try {
        const broadcaster = await stream.getBroadcaster();
        console.debug(
          `Stream Offline:`,
          broadcaster?.displayName ?? 'No DisplayName',
        );
      } catch (e) {
        console.error(e);
      }
    },
  );
  console.error(await streamoffline.getCliTestCommand());
  //
  const follower = middleware.onChannelFollow(
    process.env.TWITCH_USER_ID,
    process.env.TWITCH_USER_ID,
    async (follow) => {
      try {
        const broadcaster = await follow.getBroadcaster();
        const user = await follow.getUser();
        console.debug(
          `New follower:`,
          broadcaster?.displayName ?? 'No DisplayName',
          user?.displayName ?? 'No DisplayName',
        );
      } catch (e) {
        console.error(e);
      }
    },
  );
  console.error(await follower.getCliTestCommand());
  //
});
server.on('error', console.error);
