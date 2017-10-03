.PHONY: start stop
REPO=dumbfib

start:
	@eval $$(minikube docker-env) ;\
	docker image build -t $(REPO):latest -f Dockerfile .
	kubectl create -f kube/ --validate=false

stop:
	kubectl delete -f kube/
