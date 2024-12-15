FROM node:20-slim AS base

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

WORKDIR /app
COPY package.json package-lock.json ./

RUN npm install

COPY . .

RUN npm run build

RUN apt install nginx

COPY ./docker-start.sh ./docker-start.sh

COPY nginx/nginx.conf /etc/nginx/nginx.conf
RUN cp -fr /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["sh", "/app/docker-start.sh"]