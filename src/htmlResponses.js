const fs = require('fs');

const getPage = (req, res, file = 'client') => {
  const page = fs.readFileSync(`${__dirname}/../client/${file}.html`);
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write(page);
  res.end();
};

module.exports.getPage = getPage;
