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

Run Docker Compose to build and start the application:

```bash
docker-compose up --build -d
```

### 4. Access the Application

The application will be accessible at:

- **Application:** [http://localhost:3000](http://localhost:3000)

### 5. View Traces

Tracing is available at:

- **Tracing (Zipkin):** [http://localhost:9411](http://localhost:9411)

### 6. Access Grafana Dashboard

To view monitoring metrics, access the Grafana dashboard at:

- **Grafana:** [http://localhost:4000](http://localhost:4000)

#### Grafana Login

- **Username:** `admin`
- **Password:** `admin`

#### Connect Grafana to Prometheus

Add Prometheus as a data source in Grafana:

- **Server URL:** `http://prometheus:9090/`

#### Import Dashboards

Import the Grafana dashboards for enhanced visualization:

```bash
cd ./monitoring/grafana-dashboard-1.json
cd ./monitoring/grafana-dashboard-2.json
```

---

This setup provides a comprehensive environment for developing, monitoring, and tracing applications in a containerized DevOps workflow.
