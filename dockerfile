# Base image
FROM node:10.14.2

# Create app directory
RUN mkdir -p /usr/src/calc
WORKDIR /usr/src/calc

# 第一個 . 是我們本地位置，第二個是 docker 裡面專案的位置，就是將我們專案的程式碼全部複製進去
COPY . /usr/src/calc

# Install app dependencies
RUN npm install 


# 開放對外的 port
EXPOSE 3000

# 執行專案
CMD npm start

