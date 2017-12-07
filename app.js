// import { Buffer } from "buffer";

// var express = require('express');
// var app = new express();
// app.get('/',(req,res) => {
//     res.send('hello world');
// })
// var server = app.listen(3000,()=>{
//     var host = server.address().address;
//     var port = server.address().port;
//     console.log('应用实例，访问地址为:http://%s:%s',host,port);
// })

// var express = require('express');
// var app = express();

// app.get('/',(req,res)=>{
//     res.send('GET请求')
// })
// app.post('/',(req,res)=>{
//     res.send('POST请求')
// })
// app.get('/del_user',(req,res)=>{
//     res.send('删除页面')
// })
// app.get('/list_user',(req,res)=>{
//     res.send('获取页面列表')
// })
// app.get('/ab*cd',(req,res)=>{
//     res.send('正则匹配')
// })
// var server = app.listen(3000,()=>{
//     var host = server.address().address;
//     var port = server.address().port;
//     console.log('应用实例，访问地址为:http://%s,%s',host,port)
// })

// var express = require('express');
// var app = express();

// app.use(express.static('public'));

// app.get('/index.html', (req, res) => {
//     res.sendFile(__dirname + '/' + 'index.html');
// })
// app.get('/process-get', (req, res) => {

//     var responseData = {
//         fristname: req.query.frist_name,
//         lastname: req.query.last_name
//     }
//     res.end(JSON.stringify(responseData))
// })
// var server = app.listen(3000, () => {
//     var host = server.address().address;
//     var port = server.address().port;
//     console.log('应用实例，访问地址为:http://%s%s', host, port);
// })

// var express = require('express');
// var app = express();
// var bodyParser = require('body-parser');
// var urlencodedparser = bodyParser.urlencoded({extended:false})
// // console.log(urlencodedparser)

// app.use(express.static('public'));
// app.get('/index.html', (req, res) => {
//     res.sendFile(__dirname + '/' + 'index.html');
// })
// app.post('/process-post',urlencodedparser,(req,res)=>{
//     var responseData = {
//         'fristName': req.body.frist_name,
//         'lastName': req.body.last_name,
//     }
//     console.info(responseData)
//     res.end(JSON.stringify(responseData));
// })

// var server = app.listen(3000, () => {
//     var host = server.address().address;
//     var port = server.address().port;
//     console.log('应用实例，访问地址为:http://%s%s', host, port);
// })

// console.log(__dirname+'/'+'index.html')

// var express = require('express');
// var app = express();
// var fs = require('fs');
// var multer = require('multer');
// var bodyParser = require('body-parser');

// app.use(express.static('public'));
// app.use(bodyParser.urlencoded({extended:false}));
// app.use(multer({dest:'/tmp/'}).array('image'));

// app.get('/',(req,res)=>{
//     res.sendFile(__dirname + '/' + 'index.html');
// })

// app.post('file_upload',(req,res)=>{
//     var des_file = __dirname + '/' + req.files[0].originalname;
//     fs.readFile(req.files[0].path,(err,data)=>{
//         if(err) {
//             console.log(err)
//         }else{
//             response = {
//                 'message':'File uploaded successfully',
//                 'filename':req.files[0].originalname
//             }
//         }
//         console.log(res);
//         res.end(JSON.stringify( response ));
//     })
// });

// var server = app.listen(3000,()=>{
//     var host = server.address().address;
//     var port = server.address().port;
//     console.log('应用实例，访问地址为 http://%s:%s',host,port)
// })

// var express = require('express');
// var app = express();
// var fs = require("fs");

// var bodyParser = require('body-parser');
// var multer = require('multer');

// app.use(express.static('public'));
// app.use(bodyParser.urlencoded({
//     extended: false
// }));
// app.use(multer({
//     dest: '/tmp/'
// }).array('image'));

// app.get('/index.html', function (req, res) {
//     res.sendFile(__dirname + "/" + "index.htm");
// })

// app.post('/file_upload', function (req, res) {

//     console.log(req.files[0]); // 上传的文件信息

//     var des_file = __dirname + "/" + req.files[0].originalname;
//     fs.readFile(req.files[0].path, function (err, data) {
//         fs.writeFile(des_file, data, function (err) {
//             if (err) {
//                 console.log(err);
//             } else {
//                 response = {
//                     message: 'File uploaded successfully',
//                     filename: req.files[0].originalname
//                 };
//             }
//             console.log(response);
//             res.end(JSON.stringify(response));
//         });
//     });
// })

// var server = app.listen(3000, function () {

//     var host = server.address().address
//     var port = server.address().port

//     console.log("应用实例，访问地址为 http://%s:%s", host, port)

// })

// var fs = require('fs');
// var express = require('express');
// var multer  = require('multer')

// var app = express();
// var upload = multer({ dest: 'upload/' });

// // 单图上传
// app.post('/upload', upload.single('logo'), function(req, res, next){
//     res.send({ret_code: '0'});
// });

// app.get('/form', function(req, res, next){
//     var form = fs.readFileSync('./index.html', {encoding: 'utf8'});
//     res.send(form);
// });

// app.listen(3000);


// var Buffer = require('buffer');
// var buf = new Buffer('hello 慕课网','base64');
// 
// var buf = new Buffer([1,2.3333,3,4]);
// console.log(buf[1])
// var buf = new Buffer(7);
// buf.write('12345678')
// console.log(buf)

// var buf = new Buffer('www.baidu.com');
// var buf2 = new Buffer('laji');
// var buf3 = Buffer.concat([buf,buf2])
// console.log(buf3.toString())

// var buf = new Buffer(3);
// var buf2 = new Buffer('ddd');
// var buf3 = buf2.copy(buf)
// console.log(buf3.toString());
// var buffer1 = new Buffer('ABC');
// var buffer2 = new Buffer(2);
// buffer1.copy(buffer2);
// console.log("buffer2 content: " + buffer2.toString());

// var express = require('express');
// var app = express();
// var admin = express();
// admin.get('/',(req,res)=>{
//     console.log(admin.mountpath);
//     res.send('Admin Homepage');
// });
// app.use('/admin',admin);

// var fs = require('fs');
// fs.readFile('logo_new.png',(err,logo_buffer)=>{
//     if(Buffer.isBuffer(logo_buffer)){
//         fs.writeFile('logo_new_buffer.png',logo_buffer,(err)=>{
//             if(err) console.log(err);
//         })
//         var base64Img = logo_buffer.toString('base64');
//         console.log(base64Img)   
//         var newBuf = new Buffer(base64Img,'base64')
//         console.log(Buffer.compare(newBuf,logo_buffer))
//         fs.writeFile('logo_decoded.png',newBuf,(err)=>{
//             if(err) console.log(err)
//         })
//     }
// })

// var fs = require('fs');
// fs.readFile('logo_new.png', (err, buf) => {
//     if (Buffer.isBuffer(buf)) {
//         fs.writeFile('logo_newBuf.png', buf, (err) => {
//             if(err) console.log(err);
//             var bufStr = buf.toString('base64')
//             console.log(bufStr)
//         })
//         var base64Img = new Buffer(buf,'base64');
//         console.log(Buffer.compare(buf,base64Img))
//     }
// })

// const fs = require('fs');
// const readStream = fs.createReadStream('music.mp3');
// const writeSteam = fs.createWriteStream('music-2.mp3');
// readStream
//     .on('data', (chunk) => {
//         if(writeSteam.write(chunk) === false){
//             console.log('still cashed')
//             readStream.pause();
//         }
//     })
//     .on('end', () => {
//         console.log('数据读取完成');
//         writeSteam.end();
//     })
//     .on('close',()=>{
//         console.log('读取关闭')
//     })
// writeSteam.on('drain',()=>{
//     console.log('still drain')
//     readStream.resume();
// })

// var fs = require('fs');
// fs.readFile('music.mp3',(err,chunk)=>{
//     if(err) console.log(err);
//     fs.writeFile('music-2.mp3',chunk,(err)=>{
//         if(err) console.log(err)
//         console.log(chunk)
//     })
// })

// const fs = require('fs');
// const readStream = fs.createReadStream('music.mp3');
// const writeSteam = fs.createWriteStream('music-2.mp3');
// readStream.pipe(writeSteam)


// readStream
//     .on('data', (data) => {
//         // if(err) console.log(err)
//         if(!writeSteam.write(data)){
//             console.log('still cashed')
//             readStream.pause()
//         }
//     })
//     .on('end',()=>{
//         console.log('读取数据结束')
//         writeSteam.end();
//     })
//     .on('close',()=>{
//         console.log('读取关闭')
//     })
// writeSteam.on('drain',()=>{
//     console.log('still drain')
//     readStream.resume()
// })    
// var express = require('express');
// var http = require('http');
// var app = express();
// var server = 
// app.get('/',()=>{
//     console.log('haoxihuanni')

// }).listen(3000)

// var http = require('http');
// http.createServer((req,res)=>{
//     res.writeHead(200,{'Content-Type':'text/html;charset=UTF8'});
//     res.write('<h1>hello world</h1>');
//     res.end()
// }).listen('8080')



// var http = require('http');
// var queryString = require('querystring');
// var postData = queryString.stringify({
//     'content': '上图不上种，菊花万人捅1111',
//     'mid': 6710
// })
// var options = {
//     hostname: 'www.imooc.com',
//     pathname: '/course/docomment',
//     port: '80',
//     method:'POST',
//     headers: {
//         'Accept': 'application/json, text/javascript, */*; q=0.01',
//         'Accept-Encoding': 'gzip, deflate, br',
//         'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8,ru;q=0.7,es;q=0.6',
//         'Connection': 'keep-alive',
//         'Content-Length': postData.length,
//         'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
//         'Cookie': 'imooc_uuid=adb2e7b3-7efb-41d8-a346-ae32a0066618; imooc_isnew_ct=1506047932; loginstate=1; apsid=k4NGZkZmIyNWQ0N2Q1YzM3MDc4NzNmNTViZTJmMGMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANjE1MDkzOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADYzMGRhNTk2ZmJmNjcwZTM2MzNlOTU0OTQyMzgyOTlmvyMUWr8jFFo%3DMT; PHPSESSID=k8piql6lt1an0ep3eoc7ll93k4; Hm_lvt_f0cfcccd7b1393990c78efdeebff3968=1512482462; Hm_lpvt_f0cfcccd7b1393990c78efdeebff3968=1512482462; imooc_isnew=2; cvde=5a26a69ace1c9-9',
//         'Host': 'www.imooc.com',
//         'Origin': 'https://www.imooc.com',
//         'Referer': 'https://www.imooc.com/video/6710',
//         'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.94 Safari/537.36',
//         'X-Requested-With': 'XMLHttpRequest'
//     }
// }
// var req = http.request(options, (res) => {
//     res.on('data', (chunk) => {
//         console.log('111')
//     })
//     res.on('end',()=>{
//         console.log('响应结束')
//     })

// })
// req.write(postData);
// req.end()

// var http = require('http');
// var querystring = require('querystring');
// var postData = querystring.stringify({
// 'content': '测试测试测试33',
// 'mid': 8837
// })

// var options = {
// hostname: 'www.imooc.com',
// method: 'POST',
// port: 80,
// path: '/course/docomment',
// headers: {
// 'Accept': 'application/json, text/javascript, */*; q=0.01',
// 'Accept-Encoding': 'gzip, deflate, br',
// 'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8,ru;q=0.7,es;q=0.6',
// 'Connection': 'keep-alive',
// 'Content-Length': postData.length,
// 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
// 'Cookie': 'imooc_uuid=adb2e7b3-7efb-41d8-a346-ae32a0066618; imooc_isnew_ct=1506047932; loginstate=1; apsid=k4NGZkZmIyNWQ0N2Q1YzM3MDc4NzNmNTViZTJmMGMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANjE1MDkzOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADYzMGRhNTk2ZmJmNjcwZTM2MzNlOTU0OTQyMzgyOTlmvyMUWr8jFFo%3DMT; PHPSESSID=rqflnitusjio13vqgvu7l9o800; IMCDNS=0; Hm_lvt_f0cfcccd7b1393990c78efdeebff3968=1511269306,1511424414,1511428174; Hm_lpvt_f0cfcccd7b1393990c78efdeebff3968=1511443098; imooc_isnew=2; cvde=5a16819b9b600-144',
// 'Host': 'www.imooc.com',
// 'Origin': 'https://www.imooc.com',
// 'Referer': 'https://www.imooc.com/video/8837',
// 'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.94 Safari/537.36',
// 'X-Requested-With': 'XMLHttpRequest'
// }
// }

// var req = http.request(options, function (res) {
// console.log('status:' + res.statusCode);
// console.log('header', JSON.stringify(res.headers))

// res.on('data', function (chunk) {
// console.log(Buffer.isBuffer(chunk));
// })
// res.on('end', function () {
// console.log('发布成功！');
// })
// })

// req.on('error', function (error) {
// console.log(error.message);
// })
// req.write(postData);
// req.end();

// var express = require('express');
// var http = require('http');
// var app = express();
// app.use(function (request, response, next) {
//     if (request.url == "/") {
//         response.writeHead(200, {
//             "Content-Type": "text/plain"
//         });
//         response.end("Welcome to the homepage!\n");
//     } else {
//         next();
//     }
// });

// app.use(function (request, response, next) {
//     if (request.url == "/about") {
//         response.writeHead(200, {
//             "Content-Type": "text/plain"
//         });
//     } else {
//         next();
//     }
// });

// app.use(function (request, response) {
//     response.writeHead(404, {
//         "Content-Type": "text/plain"
//     });
//     response.end("404 error!\n");
// });
// app.use('/',(req,res)=>{
//     res.writeHead(200,{'Content-Type':'text/plain:charset=UTF8'})
//     res.end('Welcome to the homepage!\n')
//     // next()
// })
// app.use('/about',(req,res)=>{
//     res.writeHead(200,{'Content-Type':'text/plain:charset=UTF8'})
//     res.end('Welcome to the aboutPage!\n')
//     // next()
// })
// app.use('/list',(req,res)=>{
//     res.writeHead(200,{'Content-Type':'text/plain:charset=UTF8'})
//     res.end('Welcome to the listPage!\n')
//     // next()
// })
// app.use((req,res)=>{
//     res.writeHead(404,{'Content-Type':'text/plain:charset=UTF8'})
//     res.end('not found')
// })
// app.use("/home", function(request, response, next) {
//     response.writeHead(200, { "Content-Type": "text/plain" });
//     response.end("Welcome to the homepage!\n");
//   });
  
//   app.use("/about", function(request, response, next) {
//     response.writeHead(200, { "Content-Type": "text/plain" });
//     response.end("Welcome to the about page!\n");
//   });
  
//   app.use(function(request, response) {
//     response.writeHead(404, { "Content-Type": "text/plain" });
//     response.end("404 error!\n");
//   });
// http.createServer(app).listen(2000)

var hello = require('./abc');
hello.sayHi()
// new hello()