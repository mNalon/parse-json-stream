const fs = require('fs');
const path = require('path');

const { parse } = require('ndjson');

const { parseEntity, serializeEntities } = require('./transforms');

const inputFilePath = path.join(path.dirname(fs.realpathSync(__filename)), '../src/assets/input.jsonl');

const readStream = fs.createReadStream(inputFilePath);
const writeStream = fs.createWriteStream('output.json');

readStream
  .pipe(parse())
  .pipe(parseEntity)
  .pipe(serializeEntities)
  .pipe(writeStream);
