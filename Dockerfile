FROM node:18-alpine@sha256:58878e9e1ed3911bdd675d576331ed8838fc851607aed3bb91e25dfaffab3267 AS builder

WORKDIR /app
COPY . .
RUN npm install
RUN npm run compile

FROM node:18-alpine@sha256:58878e9e1ed3911bdd675d576331ed8838fc851607aed3bb91e25dfaffab3267

WORKDIR /
RUN apk upgrade libssl3 libcrypto3
COPY --from=builder /app/dist/ /app/dist/
COPY --from=builder /app/node_modules/ /app/node_modules/
COPY --from=builder /app/gulpfile.js /app/
COPY --from=builder /app/package.json /app/
COPY --from=builder /app/config/ /app/config/

EXPOSE 3000

CMD [ "node", "/app/dist/server.js" ]
