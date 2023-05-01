build-dev:
	docker build -t api-server .

run-dev:
	docker-compose -f docker-compose.dev.yml up

stop:
	docker-compose down