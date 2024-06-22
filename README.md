# culture-festival
Culture Festival Management System (CFMS): used to manage venues, artists/bands, tickets and customer info.

## Getting Started

This project uses Docker Compose to manage and run the necessary services for development and production environments. Follow the instructions below to get started.

### Prerequisites

Before you begin, make sure you have the following installed:

- [Docker](https://www.docker.com/get-started): You need Docker to build and run containers.
- [Docker Compose](https://docs.docker.com/compose/install/): Docker Compose is required to manage multi-container Docker applications.
- [Go](https://go.dev/doc/install): the backend/API part is build in Golang.

### Setting Up the Environment

1. **Clone the Repository**:
   
   Clone this repository to your local machine using the following command:

   ```ssh
   git clone https://github.com/your-username/your-repo-name.git
   ```

2. **Navigate to the Project Directory**:

    Change your working directory to the project folder:

    ```sh
    cd culture-festival
    ```

3. **Navigate to the Docker Directory**:

    The docker-compose file is used to setup a Postgres server and a database called **cfms_db** and a pgAdmin instance to easily manage said database.

    The docker-compose.yml file is located under the */docker* directory. Move to that directory:

    ```sh
    cd docker
    ```

3. **Set up the database**:

    3.1. **Build and Start the Services**:

    Run the following command to build and start the services defined in your docker-compose.yml file:

    ```sh
    docker-compose up
    ```

    This command will pull the necessary Docker images (if they are not already available locally), create and start the containers.

    To stop and remove the running services, use the following command:

    ```sh
    docker-compose down
    ```

    This command stops and removes the containers, networks, and volumes defined in the docker-compose.yml file.

    3.2. **Additional Tips**:

    <u>Viewing Logs</u>:

    To view the logs of a specific service, use the following command:

    ```sh
    docker-compose logs <service-name>
    Replace <service-name> with the name of the service as defined in the docker-compose.yml file.
    ```

    <u>Accessing a Running Container</u>:

    To access a shell inside a running container, use the following command:

    ```sh
    docker-compose exec <service-name> /bin/sh
    ```

    Replace \<service-name> with the name of the service you want to access.

4. **Setup the backend**:
   
   WIP
5. **Setup the frontend**:

   WIP