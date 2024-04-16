import express from 'express';
import { EventSubMiddleware } from '@twurple/eventsub-http';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { Bot } from '@azkaban/toasty';
import { ToxictoastMiddleware } from './middlewares/toxictoast.middleware';
import { CreativepepperMiddleware } from './middlewares/creativepepper.middleware';
import { MeltedmonstergamesMiddleware } from './middlewares/meltedmonstergames.middleware';
import { ThedevdadMiddleware } from './middlewares/thedevdad.middleware';
import { HawokaiMiddleware } from './middlewares/hawokai.middleware';

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

app.get('/', (req, res) => {
  res.send('=== Azkaban Twitch Hook Service ===').status(200);
});

middleware.apply(app);
const port = process.env.PORT || 3012;
const server = app.listen(port, async () => {
  await middleware.markAsReady();
  new ToxictoastMiddleware(middleware);
  new CreativepepperMiddleware(middleware);
  new MeltedmonstergamesMiddleware(middleware);
  new HawokaiMiddleware(middleware);
  new ThedevdadMiddleware(middleware);
});
server.on('error', console.error);
