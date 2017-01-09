// var eventEmitter = require('events').EventEmitter;
// var ee = new eventEmitter();

// //连接成功
// var connectHanlder = function(){
// 	console.log('连接成功！');
// 	ee.emit('revice');
// }
// //接受数据成功
// var reviceHanlder = function(){
// 	console.log('接收数据成功！');
// }
// ee.on('connect',connectHanlder);
// ee.on('revice',reviceHanlder);

// ee.emit('connect');
// console.log('操作执行成功！');


var fs = require('fs');

//异步
// fs.readFile('1.txt',function(e,data){
// 	if(e){
// 		console.log(e.stack);
// 	}
// 	console.log(data.toString());
// });
//同步
var txt = fs.readFileSync('1.txt');
console.log(txt.toString());

console.log('程序执行完毕');