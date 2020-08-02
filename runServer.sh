docker stop $(docker ps -a | grep "yao-ui" | awk '{print $1 }')
docker rm $(docker ps -a | grep "yao-ui" | awk '{print $1 }')
docker rmi $(docker images | grep "yao-ui" | awk '{print $3}')

