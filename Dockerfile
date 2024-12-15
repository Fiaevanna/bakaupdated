FROM node:20-slim AS base

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

WORKDIR /app
COPY package.json package-lock.json ./

RUN npm install

COPY . .

RUN npm run build

FROM nginx:1.25-alpine AS runtime

RUN curl -fsSL https://fnm.vercel.app/install | bash
RUN source ~/.bashrc
RUN fnm use --install-if-missing 22
RUN node -v


COPY ./docker-start.sh ./docker-start.sh

COPY nginx/nginx.conf /etc/nginx/nginx.conf
COPY --from=base /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["sh", "docker-start.sh"]