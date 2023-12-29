FROM nginx:stable-alpine

ENV HOST=0.0.0.0
ENV PORT=80

COPY dist/apps/inventory-admin /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]
