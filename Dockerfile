FROM oven/bun

WORKDIR /usr/src/app

COPY package*.json bun.lockb ./
RUN bun install
RUN bun build:both
COPY . .

ENV NODE_ENV production
ENV VERCEL_ENV production

CMD [ "bun", "./dist/server/bundle.js" ]