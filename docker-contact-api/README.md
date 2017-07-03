Docker Contact Demo - API Server
--------------------------------

## Pre-requisites
* node
* yarn

> NOTE: Replace the following Docker image id with your Docker Hub id

### Run the application
    cp .sample_env .env
    tsc
    yarn start

### Requests (contacts)
    curl -v http://localhost:3000/contacts

### Requests (add contact)
    curl -v -H "Content-Type: application/json" -X POST http://localhost:3000/contacts -d '{"first_name": "Andy", "last_name": "Lau", "email": "andy@abc.com", "telephone": "33334444"}'

### Requests (update contact)
    curl -v -H "Content-Type: application/json" -X PUT http://localhost:3000/contacts/1 -d '{"id": "1", "first_name": "Scott", "last_name": "Tiger", "email": "scott@abc.com", "telephone": "22345678"}'

### Requests (delete contact)
    curl -v -X DELETE http://localhost:3000/contacts/3


## docker-contact-api docker image

### Build image
    docker image build -t clarenceho/docker-contact-api .
    
### Tag image
    docker image tag [image-id] clarenceho/docker-contact-api:1.0.0

### Push image
    docker image push clarenceho/docker-contact-api:1.0.0

### Run container
    docker container run --name docker-contact-api -p 3000:3000 -d clarenceho/docker-contact-api:1.0.0
