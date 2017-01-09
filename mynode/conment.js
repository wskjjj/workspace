var http = require('http');
var querystring = require('querystring');
var postData = querystring.stringify({
	id : 13878927,
	c_content : '好帖要分享'
});
var options = {
	host : 'www.cang.com',
	port : 80,
	path : '/trade/show-13878927-2.html',
	method : 'POST',
	headers : {
		'Accept':'application/json, text/javascript, */*',
		'Accept-Encoding':'gzip, deflate, sdch',
		'Accept-Language':'zh-CN,zh;q=0.8',
		'Connection':'keep-alive',
		'Cookie':'__cfduid=de4761a79f9eb9613f3515fb37df6576a1472201327; Hm_lvt_09e2715b2839886cfd3301d4e0534570=1472203134; mycollect=myUserSurveyorID=0&myUserIsSurveyor=0&UserId=13341395&myUserName=kyahA070oad6PVsIpGdqcw%3d%3d; usertoken=Q%2bvw6bOU2v%2fdFZBAzSjzrHBMMmA6ysRuk7Pztm3nRMQ%3d; userinfo=m1NsYy9lUsqXs%2f16HpQpb366QGyM4nZbw7nE%2fLptYHw%3d; ASP.NET_SessionId=pdwkjkgqj2spv20brgsabwnq; _ga=GA1.2.1347336500.1472201324; Hm_lvt_918d70eb6bada3d03b29c8896feeb48e=1473146298; Hm_lpvt_918d70eb6bada3d03b29c8896feeb48e=1473146298; Hm_lvt_da5c4ecbe4dbe563d82e0f8969a5b5a8=1472201323,1473145728; Hm_lpvt_da5c4ecbe4dbe563d82e0f8969a5b5a8=1473146298; bfd_s=23213608.97288831.1473146298222; tmc=1.23213608.8798811.1473146298224.1473146298224.1473146298224; tma=23213608.8798811.1473146298224.1473146298224.1473146298224.1; tmd=1.23213608.8798811.1473146298224.; bfd_g=ad874d7bdcc3139b00001882005d440157c3c96a',
		'Host':'www.cang.com',
		'Referer':'http://www.cang.com/trade/show-13878927-2.html',
		'User-Agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.106 Safari/537.36',
		'X-Requested-With':'XMLHttpRequest',

		'Content-Type':'application/x-www-form-urlencoded',
		'Content-length':postData.length
	}
}
var req = http.request(options,function(res){
	console.log('status:' + res.statusCode);
	console.log('headers:' + JSON.stringify(res.headers));
	// res.setEncoding('utf8');
	res.on('data',function(chunk){
		console.log(Buffer.isBuffer(chunk));
		console.log(typeof chunk);
		// console.log(chunk);
	});
	res.on('end',function(){
		console.log('评论成功！');
	});
});
req.on('error',function(e){
	console.log('错误提示：' + e.message);
});
req.write(postData);
req.end();