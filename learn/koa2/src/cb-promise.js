const fs = require('fs');

// 过渡时期
function readFileAsync(path){
    return new Promise((resolve,reject) => {
        fs.readFile(path,(err,data) => {
            if(err) reject(err);
            else resolve(data)
        })
    })
}

readFileAsync('./package.json')
    .then(data => {
        data = JSON.parse(data)
        console.log(data.name);
    })
    .catch(err => {
        console.log(err);
    })

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