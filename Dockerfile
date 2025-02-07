FROM alpine:3.21
RUN sed -i 's#https\?://dl-cdn.alpinelinux.org/alpine#https://mirrors.tuna.tsinghua.edu.cn/alpine#g' /etc/apk/repositories
RUN apk add --no-cache libreoffice font-noto-cjk openjdk21
RUN apk add --no-cache nodejs npm python3 py3-pip

RUN npm config set registry https://registry.npmmirror.com
RUN pip config set global.index-url https://mirrors.tuna.tsinghua.edu.cn/pypi/web/simple
RUN npm i -g pm2

WORKDIR /utility-api

COPY . .

RUN sh install-dependencies.sh

EXPOSE 4000
EXPOSE 4001

CMD ["pm2-runtime", "ecosystem.config.js"]
