# A Finance management app

This is a web application designed to help users and business to efficiently track their finances. 
It allows users to record and categorize various types of financial transactions, such as income, expenses, and subscription payments.
The app provides insightful statistics and analytics to help users understand their financial habits and make informed decisions.

Some features are still on development.

# Tech stack

This app is made with spring boot and React, following an hexagonal architecture for the backend but adapting it to 
spring boot specifications like JPA so we can get the best of both.

## Setup

### To setup everything in docker compose including spring boot app (recommended):
```
docker-compose -f docker-compose-remote-spring-boot.yaml down
docker-compose -f docker-compose-local-spring-boot.yaml down
docker-compose -f docker-compose-remote-spring-boot.yaml up --build -d
```

And that's it, everything boots up with the docker containers. 


You can also generate the jar file with
```
./mvnw spring-boot:run -Dspring-boot.run.profiles=remote
```

If you change the code, you can rebuild the project just by restarting docker service
named backend. So if you are developing, you can make a run.sh script with the command
`docker-compose restart backend`.

It's configured to work with any JVM docker remote debugging to port 5005!!
(with intellij, for example).


### To setup the docker containers, but execute spring boot in host machine:
```
docker-compose -f docker-compose-remote-spring-boot.yaml down
docker-compose -f docker-compose-local-spring-boot.yaml down
docker-compose -f docker-compose-local-spring-boot.yaml up --build -d
```

Then to run the spring app:
```
./mvnw spring-boot:run -Dspring-boot.run.profiles=local
```

You can also generate the jar file with
```
./mvnw clean package -Dspring-boot.run.profiles=local
```

You can debugg it as usual with any IDE

### Configuration
You can configure everything in application-local.properties or application-remote.properties,
like database ports, etc.

pgAdmin server password is "root". It's already preconfigured

### Run Configuration
For spring boot backend, as it's being developed inside docker, you can use this run config in your ide
to run or rerun:

In windows powershell:
```
docker-compose restart backend
```

in linux:
```
docker-compose -f ../docker-compose-remote-spring-boot.yaml restart backend && docker-compose -f ../docker-compose-remote-spring-boot.yaml logs -f backend
```
This will rebuild the app. You can use jetbrains IDE shell spring run config and place this command, or create a shell script manually and run it.
