var fs = require('fs');
// 阻塞
// var data = fs.readFileSync('index.txt');
// 非阻塞(异步函数)
// fs.readFile('index.txt',function(err,data){
//     if(err) return console.log(err)
//     console.log(data.toString());
// })
// console.log('程序执行完毕');
// console.log(data.toString());
var mydata = [
    {
        title: '第一章 表单常用代码',
        content: [
            { url: 'pages/0101.html', title: '去除字符串左右的空格' },
            { url: 'pages/0102.html', title: '验证用户是否输入' },
            { url: 'pages/0103.html', title: '禁止用户输入' },
            { url: 'pages/0104.html', title: '关闭用户中文输入法' },
            { url: 'pages/0105.html', title: '禁止用户复制和粘贴' },
            { url: 'pages/0106.html', title: '限制只能输入数字' },
            { url: 'pages/0107.html', title: '限制字符串长度' },
            { url: 'pages/0108.html', title: '拖拽进度条' },
            { url: 'pages/0109.html', title: '通过cookie实现网页背景切换' },
            { url: 'pages/0110.html', title: '全国城市三级联动' },
            { url: 'pages/0111.html', title: 'Angular数据渲染' },
            { url: 'pages/0112.html', title: 'JS生成图片验证码' }
        ],
        show: false
    },
    {
        title: '第二章 JS效果相关代码',
        content: [
            { url: 'pages/0201.html', title: '楼层跳转效果' },
            { url: 'pages/0202.html', title: '按需加载图片' },
            { url: 'pages/0203.html', title: '全选、反选、全不选效果' },
            { url: 'pages/0204.html', title: '图片懒加载' },
            { url: 'pages/0205.html', title: '照片查看器' },
            { url: 'pages/0206.html', title: '图片轮播' },
            { url: 'pages/0207.html', title: '图片上传' },
            { url: 'pages/0208.html', title: '分页功能实现' },
            { url: 'pages/0209.html', title: '调用手机摄像头和相册' },
            { url: 'pages/0210.html', title: '下拉刷新、上拉加载' },
            { url: 'pages/0211.html', title: 'H5照片查看' },
            { url: 'pages/0212.html', title: 'better-scroll' }
        ],
        show: false
    },
    {
        title: '第三章 js相关插件',
        content: [
            { url: 'pages/0301.html', title: 'PhotoSwipe 相册控件' },
            { url: 'pages/0302.html', title: 'fullpage-网易邮箱6.0' },
            { url: 'pages/0303.html', title: 'fullpage-iPhone 5C' },
            { url: 'pages/0304.html', title: 'three.js-3D图形绘制' },
            { url: 'pages/0305.html', title: 'Video.js-视频播放器' },
            { url: 'pages/0306.html', title: 'sweetalert2-Alert弹框' },
            { url: 'pages/0307.html', title: 'Chart.js' },
            { url: 'pages/0308.html', title: 'dragsort拖拽排序' },
            { url: 'pages/0309.html', title: 'jquery-qrcode图片二维码' },
            { url: 'pages/0310.html', title: 'JS进行MD5加密' },
            { url: 'pages/0311.html', title: '复制内容到剪切板' },
            { url: 'pages/0312.html', title: 'jquery.form.js' },
            { url: 'pages/0313.html', title: 'echarts4.0.js' },
            { url: 'pages/0314.html', title: 'alloy_touch.js' },
            { url: 'pages/0315.html', title: '百度MVVM框架San' },
            { url: 'pages/0316.html', title: 'flowplayer' },
            { url: 'pages/0317.html', title: 'ffmpeg' }
        ],
        show: false
    },
    {
        title: '第四章 CSS3效果层',
        content: [
            { url: 'pages/0404.html', title: 'css3弹出层' },
            { url: 'pages/0405.html', title: 'Yo-master相关动画' },
            { url: 'pages/0406.html', title: 'CSS使用Tips' },
            { url: 'pages/0407.html', title: 'CSS3加载动画' },
            { url: 'pages/0408.html', title: 'csshake' },
            { url: 'pages/0409.html', title: 'color颜色选择' },
            { url: 'pages/0410.html', title: 'flex布局' },
            { url: 'pages/0411.html', title: 'About svg' },
            { url: 'pages/Cayman', title: 'Cayman theme' }
        ],
        show: false
    },
    {
        title: '第五章 移动端效果',
        content: [
            { url: 'pages/0501.html', title: 'LCalendar移动端日期时间选择控件' },
            { url: 'http://gwem.tk/douban-vue/', title: 'vue-豆瓣电影' }
        ],
        show: false
    },
    {
        title: '第六章 时间日期效果',
        content: [
            { url: 'pages/0601.html', title: '学习资源整理(By phodal Huang)' },
            { url: 'pages/0602.html', title: 'IntelliJ-IDEA' },
            { url: 'pages/0603.html', title: 'Github接口分析' }
        ],
        show: false
    },
    {
        title: '第七章 其它练习',
        content: [
            { url: 'pages/0701.html', title: '刷新当前页面' },
            { url: 'pages/0702.html', title: '百度地图引用' },
            { url: 'pages/0703.html', title: '高德地图引用' },
            { url: 'pages/0704.html', title: '腾讯地图引用' },
            { url: 'pages/0705.html', title: '扫码登录' },
            { url: 'pages/0706.html', title: 'table布局' },
            { url: 'pages/0707.html', title: 'flex布局' },
            { url: 'pages/0708.html', title: 'canvas' },
            { url: 'pages/0709.html', title: '字体图标' },
            { url: 'pages/0710.html', title: 'emoji' },
            { url: 'pages/0711.html', title: 'WebSocket' },
            { url: 'pages/0712.html', title: 'china_city' }
        ],
        show: false
    }
];
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

// var data = '';
// var readStream = fs.createReadStream('abc.txt');
// readStream.setEncoding('UTF8');
// readStream.on('data',function(chunk){
//     data += chunk;
// })
// readStream.on('end',function(){
//     console.log(data);
// })
// readStream.on('error',function(err){
//     console.log(err.stack);
// })
// console.log('程序执行完毕');
// mydata = mydata.toString();
// var str = '';
// for(let i in mydata){
//     str += ''+ mydata[i].title +'\n'
//     for (let j in mydata[i].content){
//         str += ''+ mydata[i].content[j].url +'---'+ mydata[i].content[j].title +'\n'
//     }
// }
// console.log(str);
// var writeStream = fs.createWriteStream('output.txt');
// writeStream.write(str, 'UTF8');
// writeStream.end();

// writeStream.on('finish', function () {
//     console.log('写入完成');
// })

// writeStream.on('error', function (err) {
//     console.log(err.stack);
// })

// console.log('程序执行完毕');

// 管道流
// 创建可读流
// var readStream = fs.createReadStream('index.txt');

// // 创建可写流
// var writeStream = fs.createWriteStream('input.txt');

// // 读取output中的内容，并将内容写入到input中
// readStream.pipe(writeStream);

// console.log('程序执行完毕');

// 链式流
