#!/bin/sh

mkdir -p /home/ubuntu/app/

rm -rf /home/ubuntu/app/*

cd /home/ubuntu/app/

git clone https://github.com/ed2321/the-library.git

cd /home/ubuntu/app/the-library/

sudo docker-compose up --build api


