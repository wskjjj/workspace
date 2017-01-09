// var EventsEmitter = require('events').EventEmitter;
// var emitter = new EventsEmitter();

// // emitter.on('click',function(em){
// // 	console.log('点击我 ' + em + ' 一下');
// // });
// emitter.addListener('click',function(em){
// 	console.log('点击我 ' + em + ' 一下');
// })
// emitter.emit('click',1);

var events = require('events');
var eventEmitter = new events.EventEmitter();
eventEmitter.setMaxListeners(11);

var listener1 = function (name,age){
	console.log('第1个监听：参数name='+name+'，参数age='+age);
}
var listener2 = function (name,age){
	console.log('第2个监听：参数name='+name+'，参数age='+age);
}
var listener3 = function (name,age){
	console.log('第3个监听：参数name='+name+'，参数age='+age);
}
var listenOnce = function(name,age){
	console.log('once监听：参数name='+name+'，参数age='+age);
}

// eventEmitter.on('connect',listener1);
// eventEmitter.on('connect',listener2);
// eventEmitter.on('connect',listener3);
eventEmitter.addListener('connect',function (name,age){
	console.log('第1个监听：参数name='+name+'，参数age='+age);
})
eventEmitter.addListener('connect',function (name,age){
	console.log('第2个监听：参数name='+name+'，参数age='+age);
})
eventEmitter.addListener('connect',function (name,age){
	console.log('第3个监听：参数name='+name+'，参数age='+age);
})
eventEmitter.once('once',listenOnce);


//removeListener
// eventEmitter.removeListener('connect',listener1);
// eventEmitter.removeAllListeners('connect');

var listenArr = eventEmitter.listeners('connect');
for(var i=0;i<listenArr.length;i++){
	console.log(listenArr[i]+'\n');
}
var isSuccess2 = eventEmitter.emit('click');
var isSuccess1 = eventEmitter.emit('connect','Jack',30);
eventEmitter.emit('connect','Mike',29);
eventEmitter.emit('connect','Tom',28);
eventEmitter.emit('once','Will',27);
console.log('connect监听器是否存在：'+isSuccess1+'，监听器个数：'+eventEmitter.listeners('connect').length);
console.log('click监听器是否存在：'+isSuccess2);



// EventListeners.length
console.log(eventEmitter.listeners('connect').length);
console.log(events.listenerCount(eventEmitter,'connect'));
console.log(events.listenerCount(eventEmitter,'click'));
