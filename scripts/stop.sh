#!/bin/bash

(cd /home/ec2-user/Orniss-website ; sudo docker-compose down)
sudo docker system prune --all --force