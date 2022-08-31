const fs = require('fs'); // Pull in the file system module

const imgSrc = fs.readFileSync(`${__dirname}/../client/spongegar.png`);

const getMeme = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'image/png' });
  response.write(imgSrc);
  response.end();
};

module.exports = {
  getMeme,
};
