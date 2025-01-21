# Architecture

### Separation of concerns
Each level in your program should be separte by a clear barrier the transport layer, the service layer, the storage layer

### Dependency Inversion Principle (DIP)
You're injecting the dependencies in your layers. You don't directly call them.
Because, It promotes loose coupling and makes it easier to test ur programs.

### Adaptability to Change
By organizing your code in a modular and flexible way, you can more easily introduce new features, refactor existing code, and respond to evolving business requirements.

**Note: Your systems should be easy to change, if u have to change a lot of existing code to add new feature your doing it wrong**

### Focus on Business Value
And finally, focus on devlivering value to your users, they are the ones who will be paying your bills at the end of the month. So focus on the business value

    -------------
    | Transport |
    -------------
         |
    -------------
    | Service   |
    -------------
         |
    -------------
    | Storage   |
    -------------

### Database migration with migrate tools

```bash
migrate create -seq -ext sql -dir ./cmd/migrate/migrations name
```

```bash
migrate -path=./cmd/migrate/migrations -database="postgres://admin:adminpassword@localhost/social?sslmode=disable" up/down
```