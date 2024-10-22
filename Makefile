build:; podman build -t magicnonsense/website -f Dockerfile .
start:; podman run --rm -p3000:3000 magicnonsense/website:latest
enter:; podman run --rm -p3000:3000 -it --entrypoint=sh magicnonsense/website:latest
start/prd:; podman run --rm -p3000:3000 ghcr.io/strootje/site-magicnonsense:master
