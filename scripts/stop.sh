#!/bin/bash

(cd /home/ec2-user/Orniss-website ; docker-compose down)
sudo docker system prune --all --force