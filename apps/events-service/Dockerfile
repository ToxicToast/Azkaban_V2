# This file is generated by Nx.
#
# Build the docker image with `npx nx docker-build gateway-service`.
# Tip: Modify "docker-build" options in project.json to change docker build args.
#
# Run the container with `docker run -p 3000:3000 -t gateway-service`.
FROM docker.io/node:lts-alpine

ENV HOST=0.0.0.0
ENV PORT=3010

WORKDIR /app

RUN addgroup --system events-service && \
          adduser --system -G events-service events-service

COPY dist/apps/events-service .
RUN chown -R events-service:events-service .

# You can remove this install step if you build with `--bundle` option.
# The bundled output will include external dependencies.
RUN npm i --omit=dev --omit=optional

CMD [ "node", "main.js" ]
