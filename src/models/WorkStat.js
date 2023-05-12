const { customAlphabet } = require('nanoid');
const moment = require('moment');
const nanoid = customAlphabet('1234567890abcdef', 10);

class WorkStat {
  constructor(projectName) {
    this.id = nanoid();
    this.date = new Date().toISOString();
    this.projectName = projectName;
  }

  toString() {
    return `${this.id} ${this.date} ${this.projectName}`;
  }

  static fromString(string) {
    const [nanoid, date, project_name] = string.split(' ');
    const formattedDate = moment(date).format('MM-DD hh:mm');
    const workStat = new WorkStat(project_name);
    workStat.id = nanoid;
    workStat.date = formattedDate;
    return workStat;
  }

  log() {
    console.log(this.toString());
  }
}

module.exports = { WorkStat };
