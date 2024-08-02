'use strict';

const functions = require('@google-cloud/functions-framework');

functions.http('hello', (req, res) => {
  const d = new Date();
  console.log(d.toString());
  console.log('Function execution - Part 3 without source');
  let message = req.query.message || req.body.message || 'Hello World!';
  res.status(200).send(message);
});