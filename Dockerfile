FROM node:16-alpine

WORKDIR /usr/src/app

COPY ./package*.json ./
COPY ./yarn.lock ./

# new from https://ncoughlin.com/posts/aws-codepipeline-dockerized-react-s3/
# make node modules folder
RUN mkdir -p /usr/src/app/node_modules
# recursive ownership for user node on all files in app
RUN chown -R node:node /usr/src/app

RUN yarn

COPY . .

EXPOSE 5000

# I do it again so it also takes the new files created  after installing
# recursive ownership for user node on all files in app
RUN chown -R node:node /usr/src/app

# If I need test I need another Dockerfile for production
#Multi-stage Dockerfile for testing
# https://docs.docker.com/language/nodejs/run-tests/

CMD [ "yarn", "start" ]

# new from https://ncoughlin.com/posts/aws-codepipeline-dockerized-react-s3/
USER node