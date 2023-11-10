build-dev:
	docker build -f Dockerfile.dev --no-cache --pull -t api-server-dev .

run-dev:
	docker-compose -f docker-compose-dev.yml up

build-local:
	docker build -f Dockerfile.dev --no-cache --pull -t api-server .

run-local:
	ENV=local docker-compose -f docker-compose-production.yml up

build-production:
	docker build -f Dockerfile.prod --no-cache --pull -t api-server .

run-production:
	ENV=production docker-compose -f docker-compose-production.yml up

stop:
	docker-compose down .