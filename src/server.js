const http = require('http');
const htmlHandler = require('./htmlResponses.js');
const mediaHandler = require('./mediaResponses.js');

const port = process.env.PORT || process.env.NODE_PORT || 3000;

const onRequest = (request, response) => {
  console.log(request.url);

  switch (request.url) {
    case '/party.mp4':
      mediaHandler.getStream(request, response, 'party.mp4', true);
      break;
    case '/bling.mp3':
      mediaHandler.getStream(request, response, 'bling.mp3');
      break;
    case '/bird.mp4':
      mediaHandler.getStream(request, response, 'bird.mp4', true);
      break;
    case '/page2':
      htmlHandler.getPage(request, response, 'client2');
      break;
    case '/page3':
      htmlHandler.getPage(request, response, 'client3');
      break;
    case '/':
      htmlHandler.getPage(request, response, 'client');
      break;
    default:
      htmlHandler.getPage(request, response);
      break;
  }
};

http.createServer(onRequest).listen(port, () => {
  console.log(`Listening on 127.0.0.1:${port}`);
});
