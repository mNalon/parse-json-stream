const { Transform } = require('stream');

const serializeEntities = new Transform({
  readableObjectMode: true,
  writableObjectMode: true,
  transform(chunk, encoding, callback) {
    let serializedData = JSON.stringify(chunk);
    if (this.entitiesCount === 0) {
      serializedData = `{\n  "data": [\n    ${serializedData}`;
    } else {
      serializedData = `,\n    ${serializedData}`;
    }
    this.entitiesCount += 1;
    this.push(serializedData);
    callback();
  },
  final(callback) {
    this.push('\n  ]\n}');
    callback();
  },
});

serializeEntities.entitiesCount = 0;

module.exports = serializeEntities;
