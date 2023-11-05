build-dev:
	docker build --no-cache --pull -t api-server .

run-dev:
	docker-compose -f docker-compose.dev.yml up

stop:
	docker-compose down .