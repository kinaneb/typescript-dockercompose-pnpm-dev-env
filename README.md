TypeScript Development Environment

This repository is dedicated to learning TypeScript.
It uses Docker Compose for container management and pnpm for package management.

## Prerequisites

- [Docker](https://www.docker.com/get-started)
- [Docker Compose](https://docs.docker.com/compose/install/)
- [pnpm](https://pnpm.io/installation)

## TODO

1. setup the development environment:

### Clone the Repository

```bash
git clone https://github.com/kinaneb/typescript-dockercompose-pnpm-dev-env.git
cd typescript-dockercompose-pnpm-dev-env
```

### Run the Application

Start the Docker containers using Docker Compose:

```bash
docker compose up
```

This command will build the Docker images and start the services defined in docker-compose.yml.

### Access the Application

Once the containers are running, you can access the application:

1. Open build/index.html in your browser.
2. Open the developer tools in your browser to view the console output for logs and debugging.
3. Modify index.ts or other TypeScript files as needed in the src/ directory.

License
This project is licensed under the MIT License - see the LICENSE file for details.
