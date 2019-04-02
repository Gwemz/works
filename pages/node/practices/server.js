var http = require('http');
var express = require('express');
var url = require('url');

// 生成http服务器
// http.createServer(function (req, res) {
//     res.writeHead(200, { 'Content-Type': 'text/plain' });
//     res.write('<b>on shit , this is a http server</b>');
//     res.end();
// }).listen(8001)

function start() {
    function onRequest(req, res) {
        var pathname = url.parse(req.url).pathname;
        console.log('request for '+ pathname +' received');
        // route(pathname)
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.write('<b>on shit , this is a http server</b>');
        res.end();
    }

    http.createServer(onRequest).listen(8002);
    console.log('Server running at http://127.0.0.1:8002');
}

exports.start = start;