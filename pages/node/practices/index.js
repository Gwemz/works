var server = require('./server');
var router = require('./router');
console.log(__filename);
console.log(__dirname);
function pritehello (){
    console.log('hello');
}
setTimeout(function(){
    pritehello()
},2000)
server.start(router.route);