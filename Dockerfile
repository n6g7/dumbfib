FROM node:alpine
EXPOSE 8080

WORKDIR /dumbfib

COPY src src
COPY package.json .

CMD ["npm", "start"]
