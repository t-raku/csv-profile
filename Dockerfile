
FROM node:14.18.1
WORKDIR /meteor

ENV MONGO_URL="mongodb://localhost:27017/meteor"
ENV ROOT_URL="https://127.0.0.1"
ENV PORT="3000"

# copy and unpack build package
ADD .deploy/*.tar.gz .

# settlement
RUN \
cd bundle/programs/server && \
npm i --production --unsafe-perm

EXPOSE 3000

ENTRYPOINT ["node", "/meteor/bundle/main.js"]

CMD ["ls", "-la"]