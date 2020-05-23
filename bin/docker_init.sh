cd ..;

echo "Stopping existing talent-ui-react-dev container (if any)..."
docker container stop talent-ui-react-dev
echo "Removing existing talent-ui-react-dev container (if any)..."
docker container rm talent-ui-react-dev
echo "Removing talent-ui-react image (if any)..."
docker image rm talent-ui-react
echo "Building Dockerfile.dev image with tag 'talent-ui-react'..."
docker build -f Dockerfile.dev -t talent-ui-react .
