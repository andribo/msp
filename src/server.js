const serve = require('koa-static');
const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();

app.on('error', err =>
  console.log('server error', err)
);

app.use(serve('./public'));

router.get('/user', (ctx) => {
    ctx.body = 'User page';
});

app.use(router.routes());

app.listen(3002);
