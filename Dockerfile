FROM node as builder

COPY package.json package-lock.json ./

RUN npm install 

RUN npm install && mkdir /quizapp && mv ./node_modules ./quizapp

WORKDIR /quizapp

COPY . .

# Build the project and copy the files
RUN npm run build


FROM nginx:alpine

#!/bin/sh

# COPY ./nginx /etc/nginx/nginx.conf

## Remove default nginx index page
RUN rm -rf /usr/share/nginx/html/*

# Copy from the stahg 1
COPY --from=builder /react-ui/build /usr/share/nginx/html

EXPOSE 3000 80

ENTRYPOINT ["nginx", "-g", "daemon off;"]