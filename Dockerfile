
FROM nginx:1.13.3

RUN apt-get -y update && apt-get install -y curl

## Copy our default nginx config
COPY nginx/default.conf /etc/nginx/conf.d/

## Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*

## From 'builder' stage copy over the artifacts in dist folder to default nginx public folder
COPY dist /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]

HEALTHCHECK CMD curl --fail http://localhost:80/ || exit 1
