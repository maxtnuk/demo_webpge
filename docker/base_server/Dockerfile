FROM node:alpine

ENV BASE_DM=https://github.com/docker/machine/releases/download/v0.16.0

WORKDIR /workspace

RUN apk add docker

RUN set -ex; \
    apk add --update curl tar make; \
    curl -L $BASE_DM/docker-machine-$(uname -s)-$(uname -m) >/tmp/docker-machine; \
	mv /tmp/docker-machine /usr/local/bin/docker-machine; \
	chmod +x /usr/local/bin/docker-machine

RUN set -ex; \
    curl -L https://github.com/docker/compose/releases/download/1.24.1/docker-compose-$(shell uname -s)-$(shell uname -m) -o /usr/local/bin/docker-compose; \
	chmod +x /usr/local/bin/docker-compose

COPY user_instance.pem /base/user_instance.pem

ARG REMOTE_IP
ARG REMOTE_SSH_FILE
ARG REMOTE_HOST
ARG REMOTE_NAME

# install docker-machine
RUN docker-machine create --driver generic \
	--generic-ip-address=$REMOTE_IP \
	--generic-ssh-key $REMOTE_SSH_FILE \
	--generic-ssh-user=$REMOTE_HOST $REMOTE_NAME

ENV DOCKER_TLS_VERIFY 1
ENV DOCKER_HOST tcp://$REMOTE_IP:2376
ENV DOCKER_CERT_PATH /opt/app/.docker/machine/machines/$REMOTE_NAME
ENV DOCKER_MACHINE_NAME $REMOTE_NAME

CMD [ "/bin/bash" ]