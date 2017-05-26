Docker Contact App - DB Module
------------------------------

> NOTE: Replace the following Docker image id with your Docker Hub id

### Details
- PostgreSQL 9.6.3

### Build image
    docker build -t clarenceho/docker-contact-db .

### Push image
    docker push clarenceho/docker-contact-db

### Tag image
    docker tag [image-id] clarenceho/docker-contact-db:1.0.0
    docker push clarenceho/docker-contact-db:1.0.0

### Run container
    docker run --name docker-contact-db -p 5432:5432 -e POSTGRES_USER=contact -e POSTGRES_PASSWORD=Password1 -d clarenceho/docker-contact-db:1.0.0
    