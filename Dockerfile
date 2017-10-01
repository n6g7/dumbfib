FROM node:alpine
EXPOSE 8080

WORKDIR /dumbfib

COPY src/index.js .
COPY src/package.json .

CMD ["npm", "start"]
