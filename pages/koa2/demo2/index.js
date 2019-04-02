const koa = require('koa');
const fs = require('fs');
const app = new koa()
const Router = require('koa-router');

// router
// function render(page){
//     return new Promise((resolve,reject)=>{
//         let viewUrl = `./view/${page}`;
//         fs.readFile(viewUrl,'binary',(err,data) => {
//             if(err){
//                 reject(err)
//             }else{
//                 resolve(data)
//             }
//         })
//     })
// }

// async function route(url){
//     let view = '404.html'
//     switch(url){
//         case '/':
//             view = 'index.html'
//             break
//         case '/index':
//             view = 'index.html'
//             break    
//         case '/404':
//             view = '404.html'
//             break
//         case '/todo':
//             view = 'todo.html'
//             break
//         default:
//             break
//     }
//     let html = await render(view)
//     return html
// }


// app.use(async(ctx) => {
//     let url = ctx.request.url
//     // let html = await route(url)
//     // ctx.body = html
// })

let home = new Router()

// 子路由
home.get('/',async (ctx) => {
    let html = `
        <ul>
            <li><a href="/page/hello">/page/hello</a></li>
            <li><a href="/page/404">/page/404</a></li>
        </ul>
    `
    ctx.body = html
})

// 子路由2
let page = new Router()
page.get('/404',async(ctx) => {
    ctx.body = '<h2>404 page!</h2>'
}).get('/hello',async(ctx)=>{
    ctx.body = '<h2>hello world!</h2>'
})

// 装载所有路由
let router = new Router()

router.use('/',home.routes(),home.allowedMethods())
router.use('/page',page.routes(),page.allowedMethods())

app.use(router.routes()).use(router.allowedMethods())

app.listen('3000',() => {
    console.log('demo start at port 3000!');
});
