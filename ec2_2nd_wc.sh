#!/bin/bash

# Clone repositories as the ssh key of ec2 added to github, use ssh clone method
# git clone git@github.com:EZPZ-OS/EZPZOS.Express.git
git clone git@github.com:EZPZ-OS/EZPZOS.Web.git
git clone git@github.com:EZPZ-OS/EZPZOS.Core.git

# Install dependencies and build projects
cd EZPZOS.Core/
git checkout Chris-devops
sudo npm install
sudo npm run build
cd ../EZPZOS.Web
git checkout chris_devops
sudo npm install
sudo npm run build
sudo npm start