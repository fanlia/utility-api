FROM alpine:3.21
RUN sed -i 's#https\?://dl-cdn.alpinelinux.org/alpine#https://mirrors.tuna.tsinghua.edu.cn/alpine#g' /etc/apk/repositories
RUN apk add --no-cache libreoffice font-noto-cjk openjdk21
RUN apk add --no-cache nodejs npm python3 py3-pip
RUN apk add --no-cache bash nginx

RUN npm config set registry https://registry.npmmirror.com
RUN pip config set global.index-url https://mirrors.tuna.tsinghua.edu.cn/pypi/web/simple
RUN npm i -g pm2 bun

WORKDIR /utility-api

COPY . .

RUN bash install-dependencies.sh
RUN node generate-nginx-conf.js

EXPOSE 80
EXPOSE 4000
EXPOSE 4001
EXPOSE 4002
EXPOSE 4003

CMD ["bash", "entrypoint.sh"]
