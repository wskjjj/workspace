var http = require('http');
var html = '';

function download(url,callback){
	http.get(url,function(res){
		res.on('data',function(data){
			html += data;
		});
		res.on('end',function(){
			callback(html);
		});
	}).on('error',function(){
		callback(null);
	});
}

module.exports = download;