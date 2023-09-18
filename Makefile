all: build run

build:
	npm run prepare

run:
	npm run run

.PHONY: build run
