# Message-broker
## Now I'm going to learn how message broker works using RabbitMq

### Message broker is a component that our system, service, and app can communicate with each other and share their information.

#### message broker model
- point to point messaging
- - pattern of distribution which use in message queue with one-to-one relationship between sender and receiver
  - on this model message in queue has only one receiver and is consumed at once
  - case on this scenario fits this model is processing salary's employees and money transaction
    
- publish or subscribe messaging
- - this is called "pub/sub", whatever is a published message to a topic will be sent soon by subscriber who subscribed to the topic.

