const fs = require('fs');
const path = require('path');

const fileName = '.work_stats';

function writeData(content) {
  const resolvedPath = path.join(process.env.HOME, fileName);
  if (!fs.existsSync(resolvedPath)) {
    fs.writeFileSync(resolvedPath, content);
  } else {
    fs.appendFileSync(resolvedPath, `\n${content}`);
  }
}

function readData() {
  const resolvedPath = path.join(process.env.HOME, fileName);
  if (!fs.existsSync(resolvedPath)) {
    return null;
  }
  return fs.readFileSync(resolvedPath, 'utf8');
}

module.exports = { writeData, readData };
