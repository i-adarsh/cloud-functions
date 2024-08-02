'use strict';

const functions = require('@google-cloud/functions-framework');

functions.http('hello', (req, res) => {
    let message = req.query.message || req.body.message || 'Hello World!';
    res.status(200).send(message);
});