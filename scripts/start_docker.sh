#!/bin/sh

docker rmi ndi_server_node

docker-compose --project-name ndi build server_node
docker-compose --project-name ndi run --rm --service-ports server_node
