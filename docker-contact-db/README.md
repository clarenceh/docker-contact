Docker Contact App - DB Module
------------------------------

> NOTE: Replace the following Docker image id with your Docker Hub id

### Details
- PostgreSQL 9.6.3

### Build image
    docker image build -t clarenceho/docker-contact-db .

### Tag image
    docker image tag [image-id] clarenceho/docker-contact-db:1.0.0
    docker image push clarenceho/docker-contact-db:1.0.0

### Run container
    docker container run --name docker-contact-db -p 5432:5432 -e POSTGRES_USER=contact -e POSTGRES_PASSWORD=Password1 -d clarenceho/docker-contact-db:1.0.0
    
### Run container in swarm cluster with secret
    docker service create -d --name="docker-contact-db" --secret="contact_db_passwd" -e POSTGRES_USER=contact -e POSTGRES_PASSWORD_FILE=/run/secrets/contact_db_passwd clarenceho/docker-contact-db:1.0.0
> The secret should be created first
