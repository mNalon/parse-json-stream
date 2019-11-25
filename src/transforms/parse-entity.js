const { Transform } = require('stream');

const parseEntity = new Transform({
  readableObjectMode: true,
  writableObjectMode: true,
  transform(chunk, encoding, callback) {
    // here you can parse the object (chunk) into other one
    this.push(chunk);
    callback();
  },
});

module.exports = parseEntity;
