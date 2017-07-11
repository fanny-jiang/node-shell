'use strict';

const fs = require('fs');
const chalk = require('chalk');
const prompt = chalk.blue('\nprompt > ');

module.exports = {

    pwd: function (args, done) {
        var output = '';
        output += (process.env.PWD); // this works too!
        //output+=(process.cwd());
        done(output);
    },

    date: function (args, done) {
        var output = '';
        output += (Date().toString());
        done(output);
    },

    ls: function (args, done) {
        var output = '';

        fs.readdir('.', function (err, files) {
            if (err) output += err;
            else output += files.join('\n');
            done(output);
        });

    },
    // timeout: function(cmd, done) {
    //     var output = '';
    //     if (cmd === 'timeout') {
    //         var startTime = new Date;

    //         setTimeout(function () { // callback functions don't stop your program
    //             var endTime = new Date;
    //             output += ('Time elapsed: ', endTime - startTime, 'ms');
    //         }, 500)

    //         while (new Date - startTime < 250){}; // this happens first
    //     }
    //     done(output);
    // },

    echo: function (args, done) {
        const output = args
            .split(' ')
            .map(function (arg) {
                return (arg[0] === '$') ? process.env[arg.slice(1)] : arg; // $ is environment variable
            })
            .join(' ');
        // var output = '';
        // output += cmd + args; //cmd.split(' ').slice(1).join(' ');
        done(output);
    },

    cat: function (cmd, done) {
        var output = '';
        var filename = cmd.split(' ')[1];
        var fs = require('fs');
        fs.readFile(filename, 'utf8', function (err, data) {
            if (err) {
                output += ('File not found, oh no!');
            }
            output += (data);
            done(output);
        });
    },

    head: function (cmd, done) { // not working
        var output = '';
        var filename = cmd.split(' ')[1];
        const readline = require('readline');
        const fs = require('fs');
        const rl = readline.createInterface({
            input: fs.createReadStream(filename)
        });

        var counter = 0;
        rl.on('line', (line) => {
            counter++;
            if (counter <= 5) output += (line);
        });
        done(output);
    },

    tail: function (cmd, done) { // not working
        var output = '';
        var filename = cmd.split(' ')[1];

        // Count number of lines

        var fs = require('fs');
        var fileBuffer = fs.readFileSync(filename),
            toString = fileBuffer.toString(),
            numLines = toString.split('\n').length;


        const readline = require('readline');
        const rl = readline.createInterface({
            input: fs.createReadStream(filename)
        });

        var counter = 0;
        rl.on('line', (line) => {
            counter++;
            if (counter >= numLines - 5) output += line;
        });
        done(output);
    },

    curl: function (cmd, done) { // not working
        var output = '';
        var url = cmd.split(' ')[1];
        var request = require('request');
        request(url, function (error, response, body) {
            output += ('error:', error); // Print the error if one occurred
            // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
            output += ('body:', body); // Print the HTML for the Google homepage.
        });
        done(output);
    }

};
