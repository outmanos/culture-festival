# culture-festival

**Culture Festival Management System (CFMS)**:

Used to manage venues, artists/bands, tickets and customer info.ç

An étude on Go and ReactJS. Exploring both technologies through a CRUD application.

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

    3.2. **Add the server to pgAdmin** *(this step should be automated soon)*:

    To add the Postgres server to pgAdmin, follow these steps:

    3.2.1. **Get the IP Address of the PostgreSQL Container**:

    Get the IP address of the running Postgres service by running:

    ```sh
    docker inspect -f '{{range.NetworkSettings.Networks}}{{.IPAddress}}{{end}}' postgres_container
    ```
    
    3.2.2. **Open pgAdmin**:

    Launch pgAdmin and log in with the credentials in the docker-compose.yml file.

    3.2.3. **Register a New Server**:

    In pgAdmin, right-click on *"Servers"* in the left-hand tree and select *"Create"* > *"Server..."*.

    In the *"Create - Server"* dialog, go to the *"General"* tab and enter a name for your server (e.g., CFMS).

    3.2.3. **Configure Connection Settings**:

    - Navigate to the *"Connection"* tab.
    - In the *"Host name/address"* field, enter the IP address you retrieved in step 1.
    - Keep the default PostgreSQL port 5432 in the *"Port"* field.
    - Enter the *"Username"* and *"Password"* as configured in your docker-compose.yml file.
    - Click "Save" to register the new server.

    You should now see the newly added server in pgAdmin, and you can expand it to view the database cfms_db.

    3.3. **Additional Tips**:

    <u>List containers</u>:

    To view a list of the Docker containers on your machine, use the following command:

    ```sh
    docker ps
    ```

    <u>Viewing logs</u>:

    To view the logs of a specific service, use the following command:

    ```sh
    docker-compose logs <service-name>
    Replace <service-name> with the name of the service as defined in the docker-compose.yml file.
    ```

    <u>Accessing a running container</u>:

    To access a shell inside a running container, use the following command:

    ```sh
    docker-compose exec <service-name> /bin/sh
    ```
    Replace *\<service-name>* with the name of the service you want to access.

4. **Setup the backend**:
   
   WIP

5. **Setup the frontend**:

   WIP
