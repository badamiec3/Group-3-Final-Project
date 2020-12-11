#! /bin/bash

sudo systemctl disable nginx

echo 'Building backend docker image'
cd /home/jenkins/.jenkins/workspace/project3/Group-3-Final-Project/Spring-HelpQueue
sudo docker build -t ${DOCKER_USERNAME}/backend .

echo 'Building frontend docker image'
cd /home/jenkins/.jenkins/workspace/project3/Group-3-Final-Project/frontend/fp-group3-ticket
sudo docker build -t ${DOCKER_USERNAME}/frontend .


sudo docker login -u ${DOCKER_USERNAME} -p ${DOCKER_PASSWORD}
sudo docker push ${DOCKER_USERNAME}/frontend
sudo docker push ${DOCKER_USERNAME}/backend
