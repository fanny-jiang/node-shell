module.exports = {
    pwd: function() {
        // if (cmd === "pwd") {
            process.stdout.write(process.env.PWD); // this works too!
            process.stdout.write(process.cwd());
            process.stdout.write('\nprompt > ');
        // }
    },

    date: function() {
        // if (cmd === "date") {
            process.stdout.write(Date().toString());
            process.stdout.write('\nprompt > ');
        // }
    },

    ls: function(){
        // if (cmd === 'ls'){
            var fs = require('fs');
            fs.readdir('.', function(err, files) {
                if (err) throw err;
                files.forEach(function(file) {
                process.stdout.write(file.toString() + "\n");
            });
                process.stdout.write('\nprompt > ');
            });
            // }
        },

    timeout: function() {
        if (cmd === 'timeout') {
            var startTime = new Date;

            setTimeout(function () { // callback functions don't stop your program
                var endTime = new Date;
                console.log('Time elapsed: ', endTime - startTime, 'ms');
            }, 500);

            while (new Date - startTime < 250) {}; // this happens first
        }

    },

    echo: function(cmd) {
        process.stdout.write(cmd.split(" ").slice(1).join(" "))
        process.stdout.write('\nprompt > ');
    }

    };
