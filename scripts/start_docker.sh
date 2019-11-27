#!/bin/sh

docker-compose down
docker rmi server_node

sudo docker-compose up server_node
