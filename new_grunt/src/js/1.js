window.onload = function(){

	function myTime(){

		   var date = new Date();
		var oddDate = new Date('2015-07-01 00:00:00');

		//定义当前时间
		var nowYear = date.getFullYear(),
		   nowNonth = date.getMonth() + 1,
		    nowDate = date.getDate(),
		     nowDay = new Array('星期日','星期一','星期二','星期三','星期四','星期五','星期六')[date.getDay()],
		   nowHours = date.getHours(),
		 nowMinutes = date.getMinutes(),
		 nowSeconds = date.getSeconds(),
		toLocalTime = date.toLocaleString();

		//新旧时间毫秒差
		var time = date - oddDate,
		  andDay = Math.floor(time / (24*60*60*1000)),
		afterDay = time % (24*60*60*1000),
		andHours = Math.floor(afterDay / (60*60*1000)),
	  afterHours = afterDay % (60*60*1000),
	  andMinutes = Math.floor(afterHours / (60*1000)),
	afterMinutes = afterHours % (60*1000),
	  andSeconds = Math.ceil(afterMinutes / 1000);

		//定义配置函数
		function checkMsg(n){
			if(n < 10){
				return '0' + n;
			}
			else{
				return n;
			}
		}

		//定义配置之后的时间
		var myYear = checkMsg(nowYear),
		   myMonth = checkMsg(nowNonth),
		    myDate = checkMsg(nowDate),
		   myHours = checkMsg(nowHours),
		 myMinutes = checkMsg(nowMinutes),
		 mySeconds = checkMsg(nowSeconds);

		document.getElementById('container').innerHTML = '今天是：' + myYear + '年' + myMonth + '月' + myDate + '日，' + 
		nowDay + '，' + myHours + ':' + myMinutes + ':' + mySeconds + '<br/>' +	toLocalTime + '<br/>' +
		'总毫秒：' + time + '<br/>' + '距离2015-07-01 过去:' + andDay + '天' + andHours + '时' + andMinutes + '分' + 
		andSeconds + '秒';
	}

	//显示当前时间
	setInterval(myTime,1000);
};
