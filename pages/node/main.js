var fs = require('fs');
// 阻塞
// var data = fs.readFileSync('index.txt');
// 非阻塞(异步函数)
fs.readFile('index.txt',function(err,data){
    if(err) return console.log(err)
    console.log(data.toString());
})
console.log('程序执行完毕');
// console.log(data.toString());
// var mydata = '回过头来看这次 HR 事件，罪魁祸首在源头，是管理失职。主管 B 不敢直接跟 A 说你不行，你在团队中是最差的，如果不走，很可能下一次被淘汰。主管 B 太孬了，缺乏担当。公司的处理很公正，给主管 B 记过处分。HR 也有错，也被处罚了。至于离职系统的研发人员，很简单，线上故障特别是涉及数据泄密，本来就是要担责的呀。一事归一事，很佩服这次事件的处理方式，坦荡而清晰';
// fs.open('./index.txt', `w`, function(err, fd) {
//     if (err) {
//         throw err;
//     }
//     console.log('open file success.');
//     // var buffer = new Buffer('on shit');
//     var buffer = new Buffer(''+ mydata +'');
//     // 读取文件
//     fs.write(fd, buffer, function(err, bytesWritten, buffer) {
//         if (err) {
//             throw err;
//         }

//         console.log('write success.');
//         // 打印出buffer中存入的数据
//         // console.log(bytesWritten, buffer.slice(0, bytesWritten).toString());
//         console.log(bytesWritten, buffer.toString());

//         // 关闭文件
//         fs.close(fd);
//     });
// });
// fs.writeFileSync(mydata);
// var events = require('events');
// var eventEmitter = new events.EventEmitter();

// var connectHandler = function connected(){
//     console.log('连接成功！');
//     eventEmitter.emit('data_received');
// }

// eventEmitter.on('connection',connectHandler);

// eventEmitter.on('data_received',function(){
//     console.log('数据接收成功！');
// })

// eventEmitter.emit('connection');

// console.log('程序执行完毕！');