docker stop $(docker ps -a | grep "yao-ui" | awk '{print $1 }')
docker rm $(docker ps -a | grep "yao-ui" | awk '{print $1 }')
docker rmi $(docker images | grep "yao-ui" | awk '{print $3}')
docker pull y3tu-docker.pkg.coding.net/yao/yao/yao_yao-ui:latest
docker run -d -p 80:80 --name yao-ui y3tu-docker.pkg.coding.net/yao/yao/yao_yao-ui:latest
