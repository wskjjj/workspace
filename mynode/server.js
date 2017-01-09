// var http = require('http');
// http.createServer(function(req,res){
// 	res.writeHead('Content-Type','text/plain');
// 	res.statusCode = 200;
// 	res.end('Hello World!');
// }).listen(8181,'10.12.2.12',function(){
// 	console.log('Server is running at http://10.12.2.12:8181/');
// });

// var myModule = require('./myModule.js');
// console.log(myModule.name);
// console.log(myModule.showName);
// console.log(myModule.showInfo());

// var myModule = require('./myModule');
// var pl = new myModule.People('Tom',28);
// var pw = new myModule.Pow(10);
// pl.show();
// console.log(pw.area());
// console.log('Math.PI = '+myModule.PI);


// (function(exports,require,module,_filename,_dirname){
// 	var myModule = require('./myModule');
// 	var ar = new myModule(10);
// 	console.log(ar.area());
// })

var http = require('http');
var server = http.createServer(function(req,res){
	res.writeHead(200,{'Content-Type':'text/plain'});
	res.end('Hello World!');
});
server.listen(8818,'10.12.2.12',function(){
	console.log('server run at http://10.12.2.12:8818/');
});

var Balls = function(){};
var getBall = {
	myBall : function(model){
		var ball;
		switch(model){
			case 'basketball':
				ball = new BasketBall();
				break;
			case 'football':
				ball = new FootBall();
				break;
			case 'vollinball':
				ball = new VollinBall();
				break;
			Default:
				ball = new BasketBall();
				break;
		}
		return ball;
	}
}
Balls.prototype.playBall = function(model){
	var ball = getBall.myBall('basketball');
	return ball;
	// var ball;
	// switch(model){
	// 	case 'basketball':
	// 		ball = new BasketBall();
	// 		break;
	// 	case 'football':
	// 		ball = new FootBall();
	// 		break;
	// 	case 'vollinball':
	// 		ball = new VollinBall();
	// 		break;
	// 	Default:
	// 		ball = new BasketBall();
	// 		break;
	// }
	// return ball;
}
var balls = new Balls();
console.log(balls.playBall('basketball'));