const { getData } = require('../utils/getData');

function getN(n, data) {
  if (n && typeof n === 'number') {
    return n < 0 ? data.slice(n) : data.slice(0, n);
  }
  return data;
}

function filterProjectName(data, condition) {
  return condition
    ? data.filter((workStat) => workStat.projectName === condition)
    : data;
}

function outputCommand(n, project_name) {
  const data = getData();
  const filteredData = filterProjectName(data, project_name);
  const limitedData = getN(n, filteredData);
  if (limitedData && limitedData.length > 0) {
    console.table(limitedData, Object.keys(limitedData[0]));
  }
}

module.exports = { outputCommand };
