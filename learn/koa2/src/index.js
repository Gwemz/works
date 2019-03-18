import {resolve as r} from 'path'
import {promisify} from 'util'
import {readFile} from 'fs'
import {name} from './ex'
import {getName} from './ex'

import {
    name2 as name3,
    getName2 as getName3,
    age as age2
} from './ex'

console.log('name3',name3)
console.log('getName3',getName3())
console.log('age2',age2)

async function init(params) {
    let data = await promisify(readFile)(r(__dirname,'../package.json'));
    data = JSON.parse(data)
    console.log(data.name);
}

init()