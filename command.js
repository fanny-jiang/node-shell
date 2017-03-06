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
    },

    cat: function(cmd){
        var filename = cmd.split(' ')[1];
        var fs = require('fs');
        fs.readFile(filename, 'utf8', function (err, data) {
            if (err) {
            return console.log('File not found, oh no!');
        }
        console.log(data);
        process.stdout.write('\nprompt > ');
    });

    },

    head: function(cmd){
        var filename = cmd.split(' ')[1];
        const readline = require('readline');
        const fs = require('fs');
        const rl = readline.createInterface({
            input: fs.createReadStream(filename)
        });

        var counter = 0;
        rl.on('line', (line) => {
                counter ++;
                if(counter <= 5) console.log(line);
        });
         process.stdout.write('\nprompt > ');
    },

    tail: function(cmd){
        var filename = cmd.split(' ')[1];

        // Count number of lines

        var fs = require('fs');
        var fileBuffer =  fs.readFileSync(filename),
        to_string = fileBuffer.toString(),
        numLines = to_string.split("\n").length;
        console.log(numLines);


        const readline = require('readline');
        const rl = readline.createInterface({
            input: fs.createReadStream(filename)
        });

        var counter = 0;
        rl.on('line', (line) => {
                counter ++;
                if(counter >= numLines - 5) console.log(line);
        });
         process.stdout.write('\nprompt > ');

    }
           



};
