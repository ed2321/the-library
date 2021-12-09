#!/bin/sh

# echo "Kill all the running PM2 actions"
# sudo pm2 kill

# echo "Jump to app folder"
# cd /home/ubuntu/app-name

# echo "Update app from Git"
# git pull

# echo "Install app dependencies"
# sudo rm -rf node_modules package-lock.json
# sudo npm install

# echo "Build your app"
# sudo npm run build

# echo "Run new PM2 action"
# sudo cp /home/ubuntu/ecosystem.json ecosystem.json
# sudo pm2 start ecosystem.json



mkdir -p /home/ubuntu/the-library

rm -rf /home/ubuntu/the-library/*

cd /home/ubuntu/the-library/

git clone https://github.com/ed2321/the-library.git