module.exports = {
    pwd: function(cmd) {
        if (cmd === "pwd") {
         // process.stdout.write(process.env.PWD); // this works too!
        process.stdout.write(process.cwd());
        process.stdout.write('\nprompt > ');
  }
    },
    ls: function(cmd){
        if(cmd === 'ls'){
            var fs = require('fs');
            process.stdout.write('You typed ls.');
            fs.readdir('.', function(err, files) {
                if (err) throw err;
                files.forEach(function(file) {
                process.stdout.write(file.toString() + "\n");
                });
            });
                process.stdout.write("prompt > ");
            }
        }
    }


