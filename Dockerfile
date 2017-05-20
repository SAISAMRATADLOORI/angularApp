FROM nginx:alpine
COPY default.conf /etc/nginx/conf.d/
COPY nginx.crt /etc/nginx/ssl/
COPY nginx.key /etc/nginx/ssl/

ADD dist/client /usr/share/nginx/html
EXPOSE 80