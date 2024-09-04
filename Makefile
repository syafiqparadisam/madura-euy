run-db:
	cd infra/docker && docker compose up -d
down-db:
	cd infra/docker && docker compose down

run:
	cd public && php -S localhost:4000

