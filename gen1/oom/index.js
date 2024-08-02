/**
 * Responds to any HTTP request.
 *
 * @param {!express:Request} req HTTP request context.
 * @param {!express:Response} res HTTP response context.
 */
const fs = require('fs');
const csvtojson = require('csvtojson');
exports.oom = async (req, res) => {
    let message = req.query.message || req.body.message || 'Hello World!';
    const arr = [];
    var count = 1;
    while (true) {
        console.log('Started consuming memory - ' + count);
        arr.push(new Array(10000000).fill('memory-consuming-data'));
        count++;
    }
    res.status(200).send(message);
};