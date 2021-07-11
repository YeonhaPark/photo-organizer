const fs = require('fs');
const path = require('path');

const args = process.argv;
function organize(current, destination) {
  let basicPath;
  if (!destination) {
    basicPath = current;
  } else {
    basicPath = destination;
  }
  const original = path.join(basicPath + '/original');
  const downloaded = path.join(basicPath + '/downloaded');
  const captured = path.join(basicPath + '/captured');
  const video = path.join(basicPath + '/video');
  return fs.readdir(current, function (err, files) {
    if (err) {
      throw err;
    }
    files.forEach((file) => {
      const extension = path.extname(file);
      if (!extension) return;
      const lowerCased = extension.split('.')[1].toLowerCase();
      let destinationPath;
      switch (lowerCased) {
        case 'heic':
          if (!fs.existsSync(original)) {
            fs.mkdirSync(original);
          }
          destinationPath = original;
          break;
        case 'gif':
          if (!fs.existsSync(downloaded)) {
            fs.mkdirSync(downloaded);
          }
          destinationPath = downloaded;

          break;
        case 'jpg':
          if (!fs.existsSync(downloaded)) {
            fs.mkdirSync(downloaded);
          }
          destinationPath = downloaded;
          break;
        case 'jpeg':
          if (!fs.existsSync(captured)) {
            fs.mkdirSync(captured);
          }
          destinationPath = captured;
          break;
        case 'mov':
          if (!fs.existsSync(video)) {
            fs.mkdirSync(video);
          }
          destinationPath = video;
          break;
        default:
          destinationPath = destination;
          break;
      }

      fs.rename(
        current + '/' + file,
        destinationPath + '/' + file,
        function (err) {
          if (err) {
            throw err;
          }
        }
      );
    });
  });
}

organize(args[2], args[3]);