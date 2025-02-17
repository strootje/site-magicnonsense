FROM docker.io/node:23-slim AS builder
RUN npm i -g pnpm@9

WORKDIR /app

COPY .npmrc .
COPY package.json .
COPY pnpm-lock.yaml .
RUN pnpm i

COPY *.json .
COPY src ./src
COPY *config.ts .
COPY public ./public
ENV NITRO_PRESET=deno_server
RUN pnpm build

# ----------------------------------------
FROM docker.io/denoland/deno:alpine-1.45.5

EXPOSE 3000
WORKDIR /var/lib/app

ENV DENO_FUTURE=1
ENV SMTP_HOST=localhost
ENV SMTP_PORT=2525
ENV SMTP_SUBJECT=
ENV SMTP_FROM=
ENV SMTP_TO=

RUN <<EOF
addgroup -gid 101 noroot
adduser --gid 101 --uid 101 --shell /sbin/nologin noroot
chown -R 101:101 /var/lib/app
EOF
USER 101:101

COPY --from=builder /app/.output .
CMD ["run", "--allow-sys", "--allow-env", "--allow-read", "--allow-net", "./server/index.mjs"]
