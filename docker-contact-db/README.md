Docker Contact App - DB Module
------------------------------

### Details
- PostgreSQL 9.6.3

### Build image
    docker build -t <username>/docker-contact-db .

### Push image
    docker push <username>/docker-contact-db

### Tag image
    docker tag [image-id] <username>/docker-contact-db:1.0.0
    docker push <username>/docker-contact-db:1.0.0

### Run container
    docker run --name docker-contact-db -p 5432:5432 -e POSTGRES_USER=contact -e POSTGRES_PASSWORD=Password1 -d <username>/docker-contact-db:1.0.0


    docker run --name docker-contact-db -p 5432:5432 -e POSTGRES_USER=contact -e POSTGRES_PASSWORD=Password1 -d clarenceho/docker-contact-db