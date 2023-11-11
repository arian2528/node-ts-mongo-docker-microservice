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
	docker run -e DB_USER=arian2528 -e DB_PASS=Juve@2019 -e DB_DOMAIN=cluster0.tuzgjur.mongodb.net -p 5000:80 api-server

stop:
	docker-compose down .