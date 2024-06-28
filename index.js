const Koa = require('koa');
const serve = require('koa-static');
const path = require('path');

const app = new Koa();

// 设置静态文件目录为 public
app.use(serve(path.join(__dirname, 'public')));

// 当没有匹配到其他路由时，可以重定向到 index.html（可选）
app.use(async (ctx) => {
  ctx.redirect('/index.html'); // 如果请求的路径不存在，重定向到 index.html
});

// 监听 3000 端口
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
