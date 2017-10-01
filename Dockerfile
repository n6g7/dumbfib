FROM node:alpine
EXPOSE 8080

WORKDIR /dumbfib

COPY index.js .
COPY package.json .

CMD ["npm", "start"]
