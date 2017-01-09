// var fs = require('fs');
// var rs = fs.createReadStream('balla.html');
// var data = '';
// rs.on('data',function(chunk){
// 	console.log(Buffer.isBuffer(chunk));
// 	data += chunk;
// });
// rs.on('end',function(){
// 	console.log(data);
// });
// rs.on('error',function(e){
// 	console.log('Error：' + e.message);
// })

// var fs = require('fs');
// var bf = fs.createReadStream('1.txt');
// var dataArr = [],len = 0,data;
// bf.on('data',function(chunk){
// 	dataArr.push(chunk);
// 	len += chunk.length;
// });
// bf.on('end',function(){
// 	data = Buffer.concat(dataArr,len).toString();
// 	console.log(data);
// });
// bf.on('end',function(){
// 	var buf = Buffer.concat(dataArr,len);
// 	var str = iconv.decode(buf,'utf8');
// 	console.log(str);
// });

// var fs = require('fs');
// var rs = fs.createReadStream('1.txt',{highWaterMark:11});
// rs.setEncoding('utf8');
// var data = '';
// rs.on('data',function(chunk){
// 	data += chunk;
// });
// rs.on('end',function(){
// 	console.log(data);
// });

// var buf = new Buffer('www.baidu.com');
// var json = buf.toJSON();
// var str = buf.toString();
// console.log(json);
// console.log(str);

var buf1 = new Buffer('abc');
var buf2= new Buffer('123');
buf1.copy(buf2);
console.log(buf2.toString());