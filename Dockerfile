# For local development
FROM node:18.12.1-alpine as local
WORKDIR /app
COPY . .
RUN npm ci
EXPOSE 3000
CMD [ "npm","run","start" ]