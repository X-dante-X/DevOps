1. Clone Repo
```
git clone https://github.com/X-dante-X/DevOps.git
```

1. Go to flder with app:
```
cd ./DevOps/WeatherApi
```

2. Build the Docker image with:
```
docker build -t weatherapi .
```

3. Run the Docker container with:
```
docker run -d -p 8080:8080 weatherapi
```

4. You can then access your application at 
```
http://localhost:8080
```
