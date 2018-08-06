// var http = require('http');
// var fs = require('fs');
// var url = require('url');
// // 创建服务器
// http.createServer(function(req,res){
//     var pathname = url.parse(req.url).pathname;
//     // 输出请求的文件名
//     console.log('Request for '+ pathname + ' received');
//     // 从文件系统中读取请求的文件内容
//     fs.readFile(pathname.substr(1),function(err,data){
//         if(err){
//             console.log(err);
//             res.writeHead(404,{'Content-Type':'text/html'})
//         }else{
//             res.writeHead(200,{'Content-Type':'text/html'})
//             res.write(data.toString());
//         }
//         // 发送响应数据
//         res.end();
//     })
// }).listen(8080);
// console.log('server is run at http://127.0.0.1:8080');

var express = require('express');
var app = express();
var fs = require("fs");
var bodyParser = require('body-parser');
var multer  = require('multer');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(multer({ dest: '/tmp/'}).array('image'));

app.get('/index.htm', function (req, res) {
   res.sendFile( __dirname + "/" + "index.html" );
})
 
app.get('/process_get', function (req, res) {
 
   // 输出 JSON 格式
   var response = {
       "first_name":req.query.first_name,
       "last_name":req.query.last_name
   };
   console.log(response);
   res.end(JSON.stringify(response));
})

app.post('/file_upload', function (req, res) {
    console.log(req.files[0]);  // 上传的文件信息
    var des_file = __dirname + "/" + req.files[0].originalname;
    fs.readFile( req.files[0].path, function (err, data) {
         fs.writeFile(des_file, data, function (err) {
          if( err ){
               console.log( err );
          }else{
                response = {
                    message:'File uploaded successfully', 
                    filename:req.files[0].originalname
               };
           }
           console.log( response );
           res.end( JSON.stringify( response ) );
        });
    });
 })
 
var server = app.listen(8081, function () {
 
  var host = server.address().address
  var port = server.address().port
  console.log("应用实例，访问地址为 http://127.0.0.1:8081");

})