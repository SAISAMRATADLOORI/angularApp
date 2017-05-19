FROM nginx:alpine
COPY default.conf /etc/nginx/conf.d/

ADD dist/client /usr/share/nginx/html
EXPOSE 80