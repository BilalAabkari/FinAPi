# A-spring-boot-project---MechanIQ

## Setup

### To setup everything in docker compose including spring boot app (recommended):
```
docker-compose -f docker-compose-remote-spring-boot.yaml down
docker-compose -f docker-compose-local-spring-boot.yaml down
docker-compose -f docker-compose-remote-spring-boot.yaml up --build
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
docker-compose -f docker-compose-local-spring-boot.yaml up --build
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