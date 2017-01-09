var cheerio = require('cheerio');
var server = require('./cheerio');
var url = 'http://open.163.com/special/opencourse/englishs1.html';

server(url,function(html){
	if(html){
		var $ = cheerio.load(html);
		var link = $('#list1').find('.u-ctitle').children('a');
		var imgs = $('img');
		console.log(imgs.length);
		//for循环
		// for(var i=0;i<link.length;i++){
		// 	var item = $(link[i]).attr('href');
		// 	console.log(item);
		// }
		//each循环
		link.each(function(index,obj){
			var item = $(obj).attr('href');
			console.log(item);
		});
		imgs.each(function(i,val){
			var imgurl = $(val).attr('src');
			console.log(imgurl);
		});
		console.log('视频链接地址抓取完成！');
	}
	else{
		console.log('error')
	}
});