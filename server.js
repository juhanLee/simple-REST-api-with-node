var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var session = require('express-session');
var fs = require("fs");





//서버가 읽을 수 있도록 html위치 설정.
app.set('views',__dirname + '/public/views');

//서버가 html 렌더링을 할때, ejs엔진을 사용하도록 설정
app.set('view engine','ejs');
app.engine('html', require('ejs').renderFile);



var server = app.listen(8088, function(){
  console.log("서버 시작");
});
app.use(express.static('public'));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(session({
  secret: '#*$&#^$&$^*#&$*',
  resave: false,
  saveUninitialized: true

}));

// 라우터 모듈인 main.js 를 불러와서 app에 전달
var router = require('./router/main')(app,fs);
