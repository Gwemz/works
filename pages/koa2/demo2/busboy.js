const inspect = require('util').inspect
const path = require('path')
const fs = require('fs')
const Busboy = require('busboy')

const busboy = new Busboy({headers: req.headers})

busboy.on('file',function(fieldname,file,filename,encoding,mimetype){
    console.log(`File [${fieldname}] : filename: ${filename}`);

    // 文件保存到特定路径
    file.pipe(fs.createWriteStream('./upload'))

    // 开始解析文件流
    file.on('data',function(data){
        console.log(`File [${fieldname}] got ${data.length} bytes`);
    })

    // 解析文件结束
    file.on('end',function(data){
        console.log(`File [${fieldname}] Finished`);
    })
})

// 监听请求中的字段
busboy.on('field', function(fieldname, val, fieldnameTruncated, valTruncated) {
    console.log(`Field [${fieldname}]: value: ${inspect(val)}`)
})

// 监听结束事件
busboy.on('finish', function() {
    console.log('Done parsing form!')
    res.writeHead(303, { Connection: 'close', Location: '/' })
    res.end()
})
req.pipe(busboy)