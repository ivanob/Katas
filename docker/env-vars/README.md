docker build -t "codely-hello-world-php" .
# To run the app using the env var defined in the dockerfile
docker run --rm -p 8000:80 -it "codely-hello-world-php"
# To pass my own value for the env variable
docker run --rm -p 8000:80 --env DISPLAY_ERRORS=Off-it "codely-hello-world-php"


from another terminal:
curl -i localhost:8000/
