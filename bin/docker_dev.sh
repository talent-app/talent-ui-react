cd ..;
docker container stop talent-ui-react-dev
docker container rm talent-ui-react-dev
docker run -t -i --name talent-ui-react-dev -v `pwd`/src:/talent-ui-react/src -p 3000:3000 talent-ui-react npm start
