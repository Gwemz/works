var Crawler = require("crawler");
var fs = require('fs');

// var c = new Crawler({
//     // maxConnections : 10,
//     rateLimit: 1000,
//     // This will be called for each crawled page
//     callback : function (error, res, done) {
//         // if(error){
//         //     console.log(error);
//         // }else{
//         //     var $ = res.$;
//         //     // $ is Cheerio by default
//         //     //a lean implementation of core jQuery designed specifically for the server
//         //     // console.log($('title').text());
//         //     // console.log($("body").html());
//         // }
//         console.log(res.$('title').text());
//         done();
//     }
// });

// Queue just one URL, with default callback
// c.queue('http://www.imooc.com');

// c.queue('http://www.imooc.com');
// Queue a list of URLs
// c.queue(['http://www.google.com/','http://www.yahoo.com']);

// Queue URLs with custom callbacks & parameters
// c.queue([{
//     uri: 'http://gwem.tk',
//     jQuery: false,

//     // The global callback won't be called
//     callback: function (error, res, done) {
//         if(error){
//             console.log(error);
//         }else{
//             console.log('Grabbed', res.body.length, 'bytes');
//         }
//         done();
//     }
// }]);

var a = new Crawler({
    encoding: null,
    jQuery:false,// set false to suppress warning message.
    callback: function (err, res, done) {
        if (err) {
            console.error(err.stack);
        } else {
            fs.createWriteStream('imgs/'+ res.options.filename).write(res.body);
        }
        done();
    }
});

var c = new Crawler({
    maxConnections: 10,
    // This will be called for each crawled page
    callback: function (error, res, done) {
        if (error) {
            console.log(error);
        } else {
            var $ = res.$;
            // $ is Cheerio by default
            //a lean implementation of core jQuery designed specifically for the server
            // console.log($("img").attr('src'));
            for (var i = 0; i < $('img').length; i++) {
                let img = $('img').eq(i).attr('src');
                console.log($('img').eq(i).attr('src'));
                a.queue({
                    uri:"https:"+ img +"",
                    filename:'imooc_'+ (i+1) +'.jpg'
                })
            }
        }
        done();
    }
});

c.queue('https://www.imooc.com/');

// c.queue({
//     uri:"https://img.mukewang.com/5ac356a6000166ec09360316.jpg",
//     filename:'imooc_01.jpg'
// })

// Queue some HTML code directly without grabbing (mostly for tests)
// c.queue([{
//     html: '<p>This is a <strong>test</strong></p>'
// }]);