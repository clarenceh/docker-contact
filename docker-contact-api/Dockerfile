FROM node:boron

# Installing packages
RUN apt-get update \
    && apt-get install -y --no-install-recommends apt-utils graphicsmagick curl apt-transport-https \
    && curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - \
    && echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list \
    && apt-get update \
    && apt-get install -y yarn \
    && rm -rf /var/lib/apt/lists/*

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json yarn.lock /usr/src/app/
RUN yarn global add forever && yarn

# Bundle app source
COPY . /usr/src/app
RUN /bin/bash -c './node_modules/.bin/tsc && echo ok || echo not ok'

EXPOSE 3000
CMD [ "yarn", "run", "start-prd" ]