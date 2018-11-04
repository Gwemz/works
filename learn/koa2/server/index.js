const koa = require('koa')
const app = new koa()

app.use(async (ctx,next) => {
    ctx.body = 'hello winter!!!'
})

app.listen(2000)