FROM ubuntu:18.04

RUN mkdir testflutter
ARG PROJECT_DIR=./
ENV PATH=/opt/flutter/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin

RUN apt-get update && \
    apt-get install -y \
        xz-utils \
        git \
        gnupg2 \
        gnupg \
        gnupg1 \
        unzip \
        wget \
        openssh-client \
        curl && \
    apt-get upgrade -y && \
    rm -rf /var/cache/apt

RUN curl -L https://storage.googleapis.com/flutter_infra/releases/stable/linux/flutter_linux_v1.7.8+hotfix.4-stable.tar.xz | tar -C /opt -xJ

RUN apt-get install -y lib32stdc++6

WORKDIR ${PROJECT_DIR}
COPY ./ ./

RUN flutter channel dev
RUN flutter upgrade
RUN flutter config --enable-web
RUN flutter devices