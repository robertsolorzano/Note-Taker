const fs = require('fs').promises;

// Read data from a file
const readFromFile = (filePath) => {
  return fs.readFile(filePath, 'utf8');
};
// Write data to a file 
const writeToFile = (filePath, content) => {
  return fs.writeFile(filePath, JSON.stringify(content, null, 4));
};

module.exports = { readFromFile, writeToFile };