$manifestsPath = "./kubernetes"

kubectl delete pods --all -n default
kubectl delete svc --all

docker compose build
docker-compose build

Get-ChildItem -Path $manifestsPath -Filter *.yaml | ForEach-Object {
    kubectl apply -f $_.FullName
}

Start-Sleep -Seconds 10

kubectl get pods

kubectl get services