'use strict';

const functions = require('@google-cloud/functions-framework');

functions.http('oom', (req, res) => {
    const arr = [];
    var count = 1;
    while (true) {
        console.log('Started consuming memory - ' + count);
        arr.push(new Array(10000000).fill('memory-consuming-data'));
        count++;
    }
    res.send('Hello World!');
});