import express from 'express';
import axios from 'axios';
import { EventSubMiddleware } from '@twurple/eventsub-http';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { Bot } from '@azkaban/toasty';
import { HelixStream, HelixUser } from '@twurple/api';

const app = express();
const axiosClient = axios.create({
  baseURL: 'https://api.toxictoast.de/',
});
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

app.get('/', (req, res) => {
  res.send('=== Azkaban Twitch Hook Service ===').status(200);
});

const buildStreamOnlineData = async (
  broadcaster: HelixUser,
  streamData: HelixStream,
): Promise<void> => {
  const broadcasterId = broadcaster.id ?? 'No Id';
  const displayName = broadcaster.displayName ?? 'No DisplayName';
  const title = streamData.title ?? 'No Title';
  const game = streamData.gameName ?? 'No Game';
  const startedAt = streamData.startDate ?? new Date();
  const thumbnail = streamData.thumbnailUrl ?? '';
  console.error(
    'Stream Online:',
    displayName,
    title,
    game,
    startedAt,
    thumbnail,
  );
  await axiosClient.post('/twitch/stream/online', {
    broadcasterId,
    displayName,
    title,
    game,
    startedAt,
    thumbnail,
  });
};

const buildStreamOfflineData = async (
  broadcaster: HelixUser,
): Promise<void> => {
  const broadcasterId = broadcaster.id ?? 'No Id';
  console.error('Stream Offline:', broadcasterId);
  await axiosClient.post('/twitch/stream/offline', {
    broadcasterId,
  });
};

middleware.apply(app);
const port = process.env.PORT || 3012;
const server = app.listen(port, async () => {
  await middleware.markAsReady();
  const createPepperId = '29684110';
  const meltedMonsterId = '898917515';
  const devdad = '722784403';
  //
  middleware.onStreamOnline(process.env.TWITCH_USER_ID, async (stream) => {
    try {
      const broadcaster = await stream.getBroadcaster();
      const streamData = await stream.getStream();
      await buildStreamOnlineData(broadcaster, streamData);
    } catch (e) {
      console.error(e);
    }
  });
  middleware.onStreamOnline(createPepperId, async (stream) => {
    try {
      const broadcaster = await stream.getBroadcaster();
      const streamData = await stream.getStream();
      await buildStreamOnlineData(broadcaster, streamData);
    } catch (e) {
      console.error(e);
    }
  });
  middleware.onStreamOnline(meltedMonsterId, async (stream) => {
    try {
      const broadcaster = await stream.getBroadcaster();
      const streamData = await stream.getStream();
      await buildStreamOnlineData(broadcaster, streamData);
    } catch (e) {
      console.error(e);
    }
  });
  middleware.onStreamOnline(devdad, async (stream) => {
    try {
      const broadcaster = await stream.getBroadcaster();
      const streamData = await stream.getStream();
      await buildStreamOnlineData(broadcaster, streamData);
    } catch (e) {
      console.error(e);
    }
  });
  //
  middleware.onStreamOffline(process.env.TWITCH_USER_ID, async (stream) => {
    try {
      const broadcaster = await stream.getBroadcaster();
      await buildStreamOfflineData(broadcaster);
    } catch (e) {
      console.error(e);
    }
  });
  middleware.onStreamOffline(createPepperId, async (stream) => {
    try {
      const broadcaster = await stream.getBroadcaster();
      await buildStreamOfflineData(broadcaster);
    } catch (e) {
      console.error(e);
    }
  });
  middleware.onStreamOffline(meltedMonsterId, async (stream) => {
    try {
      const broadcaster = await stream.getBroadcaster();
      await buildStreamOfflineData(broadcaster);
    } catch (e) {
      console.error(e);
    }
  });
  middleware.onStreamOffline(devdad, async (stream) => {
    try {
      const broadcaster = await stream.getBroadcaster();
      await buildStreamOfflineData(broadcaster);
    } catch (e) {
      console.error(e);
    }
  });
  //
  middleware.onChannelFollow(
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
  middleware.onChannelFollow(
    createPepperId,
    process.env.TWITCH_USER_ID,
    async (follow) => {
      try {
        const broadcaster = await follow.getBroadcaster();
        const user = await follow.getUser();
        console.debug(
          `Creative Pepper New follower:`,
          broadcaster?.displayName ?? 'No DisplayName',
          user?.displayName ?? 'No DisplayName',
        );
      } catch (e) {
        console.error(e);
      }
    },
  );
});
server.on('error', console.error);
