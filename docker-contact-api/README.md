Docker Contact Demo - API Server
--------------------------------

## Pre-requisites
* node
* yarn


### Requests (contacts)
    curl -v http://localhost:3000/contacts

### Requests (add contact)
    curl -v -H "Content-Type: application/json" -X POST http://localhost:3000/contacts -d '{"first_name": "Andy", "last_name": "Lau", "email": "andy@abc.com", "telephone": "33334444"}'

### Requests (update contact)
    curl -v -H "Content-Type: application/json" -X PUT http://localhost:3000/contacts/1 -d '{"id": "1", "first_name": "Scott", "last_name": "Tiger", "email": "scott@abc.com", "telephone": "22345678"}'

### Requests (delete contact)
    curl -v -X DELETE http://localhost:3000/contacts/3
