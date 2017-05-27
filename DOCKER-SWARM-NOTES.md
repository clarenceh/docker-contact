Docker Swarm Nodes
-------------------

## Pre-requisites
Visit Docker Playground at http://labs.play-with-docker.com

## Swarm management

### Init a new Swarm
    docker swarm init --advertise-addr 10.0.31.3

### Join a Swam
    docker swarm join \
    --token <TOKEN> \
    10.0.31.3:2377

### Create secret for DB password
    docker secret create contact_db_passwd passwd.txt
> passwd.txt is the file containing the secret

### Stack deploy
    docker stack deploy --compose-file docker-compose-swarm.yml docker-contact

### Scale API servvice
    docker service scale docker-contact_api=2