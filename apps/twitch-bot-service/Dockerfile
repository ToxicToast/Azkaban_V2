# This file is generated by Nx.
#
# Build the docker image with `npx nx docker-build gateway-service`.
# Tip: Modify "docker-build" options in project.json to change docker build args.
#
# Run the container with `docker run -p 3000:3000 -t gateway-service`.
FROM docker.io/node:lts-alpine

ENV HOST=0.0.0.0
ENV PORT=3001

WORKDIR /app

RUN addgroup --system twitch-bot-service && \
          adduser --system -G twitch-bot-service twitch-bot-service

COPY dist/apps/twitch-bot-service .
RUN chown -R twitch-bot-service:twitch-bot-service .

# You can remove this install step if you build with `--bundle` option.
# The bundled output will include external dependencies.
RUN npm i --omit=dev --omit=optional

CMD [ "node", "main.js" ]
