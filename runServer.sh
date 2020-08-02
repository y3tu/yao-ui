#!/bin/sh
if docker ps | grep -i yao-ui
    then
        echo 'kill old container'
        docker stop yao-ui
fi

# remove old container
if docker ps -a | grep -i yao-ui
    then
        echo 'rm old container'
        docker rm yao-ui
fi

# remove old images
if docker images | grep -i yao_yao-ui:latest
    then
        echo 'remove old image'
        docker rmi y3tu-docker.pkg.coding.net/yao/yao/yao_yao-ui:latest
fi

docker pull y3tu-docker.pkg.coding.net/yao/yao/yao_yao-ui:latest
docker run -d -p 80:80 --name yao-ui y3tu-docker.pkg.coding.net/yao/yao/yao_yao-ui:latest