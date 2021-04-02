FROM node:latest

ENV DB_HOST mongodb://localhost:27017/quizapp
ENV APP /src/
ENV NODE_ENV=dev

WORKDIR $APP 

COPY package*.json yarn.lock ./ 

RUN yarn


COPY . $APP
CMD ["yarn", "dev"]