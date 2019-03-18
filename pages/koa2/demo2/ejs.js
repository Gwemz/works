const Koa = require('koa');
const views = require('koa-views');
const path = require('path');
const app = new Koa();

app.use(views(path.join(__dirname,'./view'),{
    extension: 'ejs'
}))

app.use(async(ctx) => {
    let title = 'hello koa',
        name = 'winter',
        from = 'shanxi',
        age = '25';
    await ctx.render('index',{
        title,
        name,
        from,
        age
    })
})

app.listen(3000,()=>{
    console.log('server start at port 3000!!!');
})