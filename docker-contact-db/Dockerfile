FROM postgres:9.6.3
MAINTAINER Clarence Ho <ho.clarence@gmail.com>

RUN apt-get update \
      && rm -rf /var/lib/apt/lists/*

RUN mkdir -p /docker-entrypoint-initdb.d
COPY ./initdb.sql /docker-entrypoint-initdb.d/initdb.sql
