# DevOps Project

This repository contains a DevOps setup with Docker Compose to build and run the application, along with monitoring and tracing services.

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/X-dante-X/DevOps.git
```

### 2. Navigate to the Project Directory

```bash
cd ./DevOps
```

### 3. Build and Start the Application

#### Using Docker Compose

Build and start the application with Docker Compose:

```bash
docker compose up --build -d
```

#### Using Kubernetes (Minikube)

Run script for Linux/MacOS:

```bash
./runk8s.sh
```

Run script for Windows:

```bash
./runk8s.ps1
```

### 4. Access the Application

The application will be accessible at:

- **Application:** [http://localhost:3000](http://localhost:3000)

### 5. Access Grafana Dashboard

To view monitoring traces, metrics and logs access the Grafana dashboard at:

- **Grafana:** [http://localhost:4000](http://localhost:4000)

---

This setup provides a comprehensive environment for developing, monitoring, and tracing applications in a containerized DevOps workflow.
