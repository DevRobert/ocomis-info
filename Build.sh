docker login -u$DOCKER_USER -p$DOCKER_PASSWORD
docker build -t blutner/ocomis-info:latest .
docker push blutner/ocomis-info:latest
docker logout