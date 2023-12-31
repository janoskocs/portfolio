#Build app
FROM node:alpine3.18 as build
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
RUN npm run build

#Serve files with Nginx
FROM nginx:1.23-alpine
#Default nginx workdir
WORKDIR /usr/share/nginx/html
#Remove default nginx files
RUN rm -rf *
#Copy production version
COPY --from=build /app/dist .
EXPOSE 80
ENTRYPOINT [ "nginx", "-g", "daemon off;" ]