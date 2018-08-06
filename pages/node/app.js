//连接数据库
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',//主机地址
    user: 'root',//登录名
    password: '123456',//密码，我这里是空
    database:'websites'//数据库
});

connection.connect();
//查询
connection.query('SELECT * FROM `t_user`', function(err, rows, fields) {
    if (err) throw err;
    console.log('结果为: ', rows);
});
//关闭连接
connection.end();