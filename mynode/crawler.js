var http = require('http');
var cheerio = require('cheerio');
var url = 'http://www.imooc.com/learn/348';

function filterChapters(html){
	var $ = cheerio.load(html);
	var chapters = $('.chapter');
	var strong = chapters.find('strong').children('i,div').remove();
	var link = $('.video').find('li').children('em').remove();
	var courseData = [];

	chapters.each(function(){
		var chapter = $(this);
		var chapterTitle = chapter.find('strong').text().replace(/(^\s*)|(\s*$)/g, "");
		var videos = chapter.find('.video').children('li');
		var chapterData = {
			chapterTitle : chapterTitle,
			videos : []
		};
		videos.each(function(){
			var video = $(this).find('.J-media-item');
			var videoTitle = video.text();
			var videoId = video.attr('href').split('/video/')[1];
			chapterData.videos.push({
				videoTitle : videoTitle,
				videoId : videoId
			});
		});
		courseData.push(chapterData);
	});
	// for(var i = 0;i < chapters.length;i++){
	// 	var chapterTitle = $(chapters[i]).find('strong').text().replace(/(^\s*)|(\s*$)/g, "");
	// 	// var video = chapter[i].find('.video').children('li');
	// 	var chapterData = {
	// 		chapterTitle : chapterTitle
	// 	};
	// 	courseData.push(chapterData);
	// }

	return courseData;
}
function printChapterInfo(courseData){
	//forEach实现
	courseData.forEach(function(item){
		var chapterTitle = item.chapterTitle;
		console.log(chapterTitle);
		item.videos.forEach(function(videos){
			console.log('【'+　videos.videoId　+'】' + videos.videoTitle.replace(/(^\s*)|(\s*$)/g, ""));
		});
	});
	//for实现
	// for(var i=0;i<courseData.length;i++){
	// 	var item = courseData[i].chapterTitle;
	// 	console.log(item)
	// }
}

http.get(url,function(res){
	var html = '';
	res.on('data',function(data){
		html += data;
	});
	res.on('end',function(){
		// console.log(html);
		var courseData = filterChapters(html);
		printChapterInfo(courseData);
	})
}).on('error',function(e){
	console.log('获取数据出错：'+e.message);
})