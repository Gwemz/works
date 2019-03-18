'use strict';

var fs = require('fs');

// 过渡时期
function readFileAsync(path) {
    return new Promise(function (resolve, reject) {
        fs.readFile(path, function (err, data) {
            if (err) reject(err);else resolve(data);
        });
    });
}

readFileAsync('./package.json').then(function (data) {
    data = JSON.parse(data);
    console.log(data.name);
}).catch(function (err) {
    console.log(err);
});

// 新版规范
// const util = require('util');

// util.promisify(fs.readFile)('./package.json')
//     .then(JSON.parse)
//     .then(data => {
//         console.log(data.name);
//     })
//     .catch(err => {
//         console.log(err);
//     })
//# sourceMappingURL=cb-promise.js.map