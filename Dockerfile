FROM node:14.20
# COPY  /app
WORKDIR /app
COPY . /app/
RUN npm install 
RUN npm install express
EXPOSE 3000
CMD node server.js

