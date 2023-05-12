const { WorkStat } = require('../models/WorkStat');
const { readData } = require('../utils/files/fileOperations');

function getData() {
  data = readData();
  const lines = data.split('\n');
  return lines.map((line) => WorkStat.fromString(line));
}

module.exports = { getData };
