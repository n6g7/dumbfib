.PHONY: start stop
REPO=dumbfib

start:
	@eval $$(minikube docker-env) ;\
	docker image build -t $(REPO):dev -f Dockerfile .
	kubectl create -f kube/dev/ --validate=false

stop:
	kubectl delete -f kube/dev/
