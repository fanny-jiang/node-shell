// console.log(Object.keys(process));
// this logs out an array containing all the process methods

const chalk = require('chalk');
const commands = require('./command'); // commands is an object
const prompt = chalk.blue('\nprompt > ');

// Output a prompt
process.stdout.write(prompt);

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', function (data) {

  // const cmd = data.toString().trim(); // remove the newline

  // if (commands[cmd.split(' ')[0]]) commands[cmd.split(' ')[0]](cmd, done);
  // else process.stderr.write(chalk.red('command not found: ') + cmd);

  const tokens = data.toString().trim().split(' '); // echo hello world!
  const cmd = tokens[0]; // echo
  const args = tokens.slice(1).join(' '); // hello world!

  if (commands[tokens[0]]) commands[tokens[0]](cmd, done);
  else process.stderr.write(chalk.red('command not found: ') + cmd);

});

var done = function (output) {
  process.stdout.write(output);
  process.stdout.write(prompt);
}
