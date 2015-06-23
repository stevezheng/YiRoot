// 在 Cloud code 里初始化 Express 框架
var AV = require('leanengine');
var express = require('express');
var avosExpressCookieSession = require('avos-express-cookie-session');
var index = require('cloud/routes/index');
var admin = require('cloud/routes/admin');

var app = express();

// App 全局配置
app.set('views','cloud/views');   // 设置模板目录
app.set('view engine', 'ejs');    // 设置 template 引擎
app.use(express.bodyParser());    // 读取请求 body 的中间件
// 启用 cookieParser
app.use(express.cookieParser('YiRoot'));
// 使用 avos-express-cookie-session 记录登录信息到 cookie
app.use(avosExpressCookieSession({ cookie: { maxAge: 3600000 }, fetchUser: true}));

// 使用 Express 路由 API 服务 /hello 的 HTTP GET 请求
app.get('/hello', function(req, res) {
  res.render('hello', { message: 'Congrats, you just set up your app!' });
});

index(app);

AV.Cloud.useMasterKey();

// 最后，必须有这行代码来使 express 响应 HTTP 请求
app.listen();