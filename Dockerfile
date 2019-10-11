FROM node:latest as BUILDER
WORKDIR /code
COPY .npmignore webpack.config.js package.json LICENSE /code/
COPY src/ /code/src
RUN npm install && npm run build

FROM pierrezemb/gostatic:latest
EXPOSE 8043/tcp
COPY --from=BUILDER /code/dist/ /srv/http
