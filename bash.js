// console.log(Object.keys(process));

// Output a prompt
process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', function (data) {
  var cmd = data.toString().trim(); // remove the newline
  var commands = require('./command'); // commands is an object
  commands[cmd](cmd); // cmd is a property on commands and we also called our passed in cmd on this property

});

