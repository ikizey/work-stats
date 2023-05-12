const { writeData } = require('../utils/files/fileOperations');
const { WorkStat } = require('../models/WorkStat');

function addCommand(projectName) {
  if (projectName) {
    const workStat = new WorkStat(projectName);
    writeData(workStat.toString());
    console.info(workStat.toString());
  } else {
    console.log('No input provided.');
  }
}

module.exports = { addCommand };
