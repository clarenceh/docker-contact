Docker Contact - Demo Application
---------------------------------

This module contains the docker compose file for the contact demo-app

## Pre-requisites
* The Docker images were built and tagged according to the instructions of each of the following modules:
  * docker-contact-db
  * docker-contact-api
  * docker-contact-web
* A Docker Swarm cluster was created eiither in Docker Playground or locally

## To start/stop the application (local env)

### For start the application with docker compose
    docker-compose up -d

### For stop the application with docker compose
    docker-compose down