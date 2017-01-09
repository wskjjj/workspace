var http = require('http');
var options = {
	hostname : 'www.dacai.com',
	port : 80,
	mothod : 'POST',
	path : '/'
}
var req = http.request(options,function(res){
	var str = '';
	res.setEncoding('utf8');
	res.on('data',function(chunk){
		str += chunk;
		// console.log('Body:'+chunk);
	});
	res.on('end',function(){
		console.log(str);
	});
	console.log('statusCode:' + res.statusCode);
	//console.log('headers:' + JSON.stringify(res.headers));
});
//监听错误信息
req.on('error',function(e){
	console.log('error：' + e.message);
});
//返回头部信息
req.on('response',function(res){
	//console.log('headers：' + JSON.stringify(res.headers));
});
req.write('data\n');
req.write('data\n');
req.end();