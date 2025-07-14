.PHONY: clean build link start dev

build:
	#npm run lint && npm run build
	npm run build

link:
	npm link

start:
	cd ~/.n8n/custom && npm link @kuantia-ai/n8n-nodes-kuantia-crm && n8n start

tests:
	npm run test

dev:
	make clean
	#make tests
	make build
	make link
	make start

clean:
	rm -rf ./dist

up-swagger:
	wget -qO- http://localhost:3000/-json | jq '.' > ./nodes/WAHA/openapi/openapi.json
