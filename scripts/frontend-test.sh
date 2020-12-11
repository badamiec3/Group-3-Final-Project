 #! /bin/bash
ssh ubuntu@${testvm_ip} <<EOF
cd ~
. ./databasecredentials.sh

cd ~/Group-3-Final-Project/frontend/fp-group3-ticket

pwd

sudo npm install

sudo npm test -- --watchAll=false
EOF