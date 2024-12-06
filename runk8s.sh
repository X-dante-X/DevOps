manifests_path="./kubernetes"

kubectl delete pods --all -n default
kubectl delete svc --all -n default

docker compose build
docker-compose build


for file in "$manifests_path"/*.yaml; do
  kubectl apply -f "$file"
done

sleep 10

kubectl get pods

kubectl get services