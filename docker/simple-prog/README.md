docker build -t "codely-hello-world" .
docker run --rm -p 8000:80 -it "codely-hello-world"


from another terminal:
curl -i localhost:8000/
