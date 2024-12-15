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

COPY nginx/nginx.conf /etc/nginx/nginx.conf
COPY --from=base /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]