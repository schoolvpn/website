FROM nginx:latest
LABEL Name=schoolvpn.ca Version=1.1
COPY /site /usr/share/nginx/html