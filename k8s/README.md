# Setting up cluster

eksctl create cluster \
--name udagram3-cluster \
--region eu-north-1 \
--nodegroup-name linux-nodes \
--nodes 2

aws eks --region <region-code> update-kubeconfig --name <cluster_name>

# nginx ingress

from: https://kubernetes.github.io/ingress-nginx/deploy/

kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v0.41.2/deploy/static/provider/aws/deploy.yaml