var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
const proxy = require('express-http-proxy');

const customerController = require("./src/customer/controller/customerController")

//静态资源加载
app.use(express.static(__dirname + '/'));

const apiProxy = proxy('http://localhost:6061');
app.use('/api', apiProxy);

app.all('*', function(req, res, next) {
    //允许的来源
    res.header("Access-Control-Allow-Origin", "*"); //"*"  =>"http://localhost:8082"
    //允许的头部信息，如果自定义请求头，需要添加以下信息，允许列表可以根据需求添加
    res.header("Access-Control-Allow-Headers", "Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild");
    //允许的请求类型
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1')
    next();
});

//登录请求
app.get('/login', function(req, res) {
    const checkFlg = customerController.userLogin(req.query.username, req.query.password);
    checkFlg.then((data) => {
        console.log("result= " + data) //拿到数据
        if (data) {
<<<<<<< HEAD
            //*************************************************************** */
            //返回给页面用户信息，通过res.send()。前端再把取到的值传到并跳转客服系统。
            //*************************************************************** */
            // res.json("{'namne':'2221122'}");
=======

            //*************************************************************** */
            //返回给页面用户信息，通过res.send()。前端再把取到的值传到并跳转客服系统。
            //*************************************************************** */
>>>>>>> 0b10cdd198489460e10b26b351bc0fe4bc61bd41
            res.sendFile(__dirname + "/view/" + "customer.html");
            // res.render(__dirname + "/view/" + "customer.html", { name: 'Andy' });
        } else {
            res.send("<script>alert('用户名或密码不正确!')</script>");
        }
    })
})

app.get('/user/userlogin', function(req, res) {
    console.log("444444");
    // res.sendFile(__dirname + "/view/" + "login.html");
})

//访客和客服的对话处理 && 重复登录对话处理
const users = {};
io.on('connection', (socket) => {
    users[socket.request._query.clientid] = socket.id
        // console.log(socket.request._query.clientid);
    socket.on('disconnect', () => {
        console.log("用户" + socket.id + "断开连接");
    });
    console.log("用户" + socket.id + "连接");
    socket.on('messageevent', (data) => {
        // console.log('data= ' + JSON.stringify(data));
        // soc.to(users[data.sourceClientId] + "").emit('push messageevent', data);
        io.to(users[data.targetClientId] + "").emit('push messageevent', data);
    })
    socket.on('repeatLoginMmessage', (data) => {
        //客服登录处理
        // io.to(users[data.targetClientId] + "").emit('push messageevent', "data");
        io.to(users[data.targetClientId] + "").emit('push repeatLoginMmessage', "<script>alert('当前账户异地登录!')</script>");
    })
})

http.listen(8082, function() {
    console.log('connect successfully')
})