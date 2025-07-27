# Use the official Maven image as the parent image
FROM maven:3.9-eclipse-temurin-17 as build

# Set the working directory to /app
WORKDIR /app

# Copy the local pom.xml and src/ contents into the container
COPY pom.xml ./
COPY backend/src ./src

# Run Maven to build the package
RUN mvn dependency:go-offline
RUN mvn clean package -DskipTests

# Use the built jar file from the build context to create the final image
FROM eclipse-temurin:17-jre

# Set the working directory to /app
WORKDIR /app

# Copy the built jar file into the container
COPY --from=build /app/target/*.jar /app.jar

# Run the jar file
ENTRYPOINT ["java", "-jar", "/app.jar"]