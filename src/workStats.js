#!/usr/bin/env node

const { program } = require('commander');
const { name, version, description } = require('../package.json');
const { addCommand } = require('./commands/addCommand');
const { outputCommand } = require('./commands/outputCommand');

program
  .option('-d, --debug', 'output extra debugging.')

  .option('-i, --input <project_name>', 'Add data for <project_name>.')
  // .option('-d, --remove <project_name>', 'Remove data for id.')
  .option('-o, --output', 'Show all work stats.')
  .option('-e, --tail <lines>', 'Show last <lines> lines.')
  .option('-a, --head <lines>', 'Show first <lines> lines.')
  .option('-f, --filter <project_name>', 'Filter the work stats.')

  .option('-v, --version', 'Show the version number.');

program.parse(process.argv);
const options = program.opts();

if (options.debug) console.log(options);

if (options.input) {
  addCommand(options.input);
  return;
}

if (options.version) {
  console.log(`${name} v${version}\n${description}`);
  return;
}

const head = options.head && +options.head;
const tail = options.tail && -options.tail;
const n = tail ? tail : head;
if (n || options.filter || options.output) {
  outputCommand(n, options.filter);
  return;
}

// program
//   .command('delete')
//   .description('Delete a work stat.')
//   .option('-n', '--nano-id', 'The nano ID of the work stat to delete.')
//   .action(deleteCommand);
