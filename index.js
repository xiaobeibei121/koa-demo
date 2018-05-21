const Koa = require('koa');

const app = new Koa();

// 注意require('koa-router')返回的是函数:
const router = require('koa-router')();

app.use(async (ctx, next) => {
    console.log(`${ctx.request.method} ${ctx.request.url}`); // 打印URL
    await next(); // 调用下一个middleware
});

router.get('/', async (ctx, next) => {
    ctx.response.body = '<div>index</div>';
});

router.get('/hello/:name', async (ctx, next) => {
    const _params = ctx.params;
    ctx.response.body = `<div>${_params.name}</div>`;
});

app.use(router.routes());

app.listen(3000);