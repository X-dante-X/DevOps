manifests_path="./kubernetes"

for file in "$manifests_path"/*.yaml; do
  kubectl apply -f "$file"
done

sleep 10

kubectl get pods

kubectl get services