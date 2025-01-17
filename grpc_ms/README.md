# Microservice with GRPC 

### Why gRPC?

- For more performant

- Sending JSON by HTTP is expensive because of data marshalling and unmarshalling,
gRPC uses Protocol Buffers as it's default seriliazation machanism which is a binary serialization

- For server to server communication