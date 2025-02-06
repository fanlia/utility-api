FROM alpine:3.21
RUN sed -i 's#https\?://dl-cdn.alpinelinux.org/alpine#https://mirrors.tuna.tsinghua.edu.cn/alpine#g' /etc/apk/repositories
RUN apk add --no-cache libreoffice font-noto-cjk openjdk21
RUN apk add --no-cache nodejs npm python3 py3-pip
WORKDIR /config
