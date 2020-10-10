FROM node:10.19.0 as node

WORKDIR /app

COPY . .

RUN npm i yarn

RUN yarn global add @angular/cli@latest

RUN npm install

RUN ng build

FROM nginx:1.19.2

COPY --from=node /app/dist/stegano-images-web /usr/share/nginx/html
COPY --from=node /app/nginx.conf /etc/nginx/nginx.conf
