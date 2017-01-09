// var eventEmitter = require('events').EventEmitter;
// var util = require('util');
// var http =require('http');

// var Promise = function(){
// 	eventEmitter.call(this);
// }
// util.inherits(Promise,eventEmitter);
// Promise.prototype.then = function(fulfilledHandler,errorHandler,progressHandler){
// 	if(typeof fulfilledHandler == 'function'){
// 		this.once('success',fulfilledHandler);
// 	}
// 	if(typeof errorHandler == 'function'){
// 		this.once('error',errorHandler);
// 	}
// 	if(typeof progressHandler == 'function'){
// 		this.on('progress',progressHandler);
// 	}
// 	return this;
// }
// var Deferred = function(){
// 	this.state = 'unfulfilled';
// 	this.promise = new Promise();
// }
// Deferred.prototype.resolve = function(obj){
// 	this.state = 'fulfilled';
// 	this.promise.emit('success',obj);
// }
// Deferred.prototype.reject = function(err){
// 	this.state = 'failed';
// 	this.promise.emit('error',err);
// }
// Deferred.prototype.progress = function(data){
// 	this.promise.emit('progress',data);
// }

// var promisify = function(res){
// 	var deferred = new Deferred();
// 	var result = '';
// 	res.on('data',function(chunk){
// 		result += chunk;
// 		deferred.progress(chunk);
// 	});
// 	res.on('end',function(){
// 		deferred.resolve(result);
// 	});
// 	res.on('error',function(err){
// 		deferred.reject(err);
// 	});
// 	return deferred.progress;
// }

// promisify(res).then(function(){
// 	//Done
// },function(err){
// 	//Err
// },function(chunk){
// 	//progress
// 	console.log('body:' + chunk);
// });

// function runAsync(callback){
// 	setTimeout(function(){
// 		console.log('执行成功');
// 		callback('随便什么数据');
// 	},13);	
// }
// runAsync(function(data){
// 	console.log(data);
// })

// function runAsync(){
// 	var promise = new Promise(function(resolve,reject){
// 		setTimeout(function(){
// 			console.log('执行成功');
// 			resolve('随便什么数据');
// 		},100);
// 	});
// 	return promise;
// }
// runAsync().then(function(data){
// 	console.log(data);
// });

//all
// function runAsync1(){
// 	var promise = new Promise(function(resolve,reject){
// 		setTimeout(function(){
// 			console.log('执行成功1');
// 			resolve('随便什么数据1');
// 		},100);
// 	});
// 	return promise;
// }
// function runAsync2(){
// 	var promise = new Promise(function(resolve,reject){
// 		setTimeout(function(){
// 			console.log('执行成功2');
// 			resolve('随便什么数据2');
// 		},200);
// 	});
// 	return promise;
// }
// function runAsync3(){
// 	var promise = new Promise(function(resolve,reject){
// 		setTimeout(function(){
// 			console.log('执行成功3');
// 			resolve('随便什么数据3');
// 		},200);
// 	});
// 	return promise;
// }
// Promise
// .race([runAsync1(),runAsync2(),runAsync3()])
// .then(function(results){
// 	console.log(results);
// })

//race
// function requestImg(){
// 	var promise = new Promise(function(resolve,reject){
// 		var img = new Image();
// 		img.onload = function(){
// 			resolve(img);
// 		}
// 		img.src = 'http://images2015.cnblogs.com/blog/520134/201603/520134-20160311003722741-755677508.png';
// 	});
// 	return promise;
// }
// function timeout(){
// 	var promise = new Promise(function(resolve,reject){
// 		setTimeout(function(){
// 			reject('图片请求超时');
// 		},5000);
// 	});
// 	return promise;
// }
// Promise
// .race([requestImg(),timeout()])
// .then(function(results){console.log(results);})
// .catch(function(reason){console.log(reason);});

//then,catch
// function runAsync(){
// 	var promise = new Promise(function(resolve,reject){
// 		var num = Math.ceil(Math.random()*10);
// 		if(num <= 5){
// 			resolve(num);
// 		}
// 		else{
// 			console.log('数字太大');
// 		} 
// 		console.log(reason);
// 	});
// 	return promise;
// }
// // runAsync().then(function(data){
// // 	console.log(data);
// // },function(data){
// // 	console.log(data);
// // }
// // })
// runAsync()
// .then(function(fulfilled){
// 	console.log(fulfilled);
// })
// .catch(function(failed){
// 	console.log(failed);
// })


// function Async1(){
// 	var p = new Promise(function(resolve,reject){
// 		// setTimeout(function(){
// 		// 	console.log('这是第一个Async');
// 		// 	resolve('第一个');
// 		// },1000);
// 		var num = Math.ceil(Math.random() * 10);
// 		if(num <= 5){
// 			resolve(num);
// 		}
// 		else{
// 			reject('数字太大！');
// 		}
// 	});
// 	return p;
// }
// Async1()
// // .then(function(data){
// // 	console.log(data);
// // },function(reason){
// // 	console.log(reason);
// // });
// .then(function(data){console.log(data)})
// .catch(function(reason){console.log(reason)})

function Async1(){
	var p = new Promise(function(resolve,reject){
		setTimeout(function(){
			console.log('这是第一个Async');
			resolve('第一个');
		},1000);
	});
	return p;
}