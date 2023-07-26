FROM rabbitmq:3-managemenet

# EXPOSE RabbitMQ default ports
EXPOSE 5672 15672

# docker build -t my-rabbitmq-image .

# docker run -d --name my-rabbit -p 15672:15672 -p 5672:5672 my-rabbitmq-image

# docker run -d --name my-rabbit -p 15672:15672 -p 5672:5672 rabbitmq:3-management
