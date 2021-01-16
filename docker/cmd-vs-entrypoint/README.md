It builds an image and sends the argument /etc/os-release into the program /bin/cat

docker build -t "cmd-vs-entrypoint" .
docker run --rm -it "cmd-vs-entrypoint" /etc/os-release
