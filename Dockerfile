FROM keymetrics/pm2:latest-alpine
WORKDIR /app
# Bundle APP files
# 安装 nodemon 以实现热更新

RUN npm install -g nodemon
RUN npm install -g typescript

# Install deps
COPY package*.json ./
COPY pm2.json .

ENV NPM_CONFIG_LOGLEVEL warn
RUN npm install && \
    npm cache clean --force
COPY ./src ./src
COPY . .
RUN npm run build:prod
# If PM2 need to use typescripe need to install
# RUN pm2 install typescript

# Expose ports (for orchestrators and dynamic reverse proxies)
EXPOSE 3000

# Start the app
CMD [ "pm2-runtime", "start", "pm2.json", "--env", "production"]