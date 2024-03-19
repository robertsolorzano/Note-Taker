const fs = require('fs').promises;

const readFromFile = (filePath) => {
  return fs.readFile(filePath, 'utf8');
};

const writeToFile = (filePath, content) => {
  return fs.writeFile(filePath, JSON.stringify(content, null, 4));
};

module.exports = { readFromFile, writeToFile };