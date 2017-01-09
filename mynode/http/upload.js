var eventEmitter = require('events').EventEmitter;
// var ee = new eventEmitter.EventEmitter();
var util = require('util');
function Upload(){
	console.log('文件上传成功！');
}
util.inherits(Upload,eventEmitter);
// function Upload(){
// 	eventEmitter.call(this);
// 	console.log('文件上传成功！');
// }
// util.inherits(Upload,eventEmitter);

var upload = new Upload();

upload.on('init',function(){
	console.log('检查文件是否合法！');
});
upload.on('load',function(){
	console.log('文件正在上传中...');
});
upload.on('over',function(){
	console.log('上传完毕！');
})

// ee.on('eat',function(some){
// 	console.log('我想要吃'+some);
// })

upload.emit('init');
upload.emit('load');
upload.emit('over');
// ee.emit('eat','水果！');
