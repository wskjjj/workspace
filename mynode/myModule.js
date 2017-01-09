// var name = 'Jack';
// this.showName = 'Tom';
// this.showInfo = function(){
// 	return this.showName + 'is my friend!';
// }


// //URL
// var url = require('url');
// var aa = url.parse('http://www.baidu.com/index.php?name=node&age=30');
// var bb = url.format({
//   // protocol: 'http:',
//   // auth: null,
//   // slashes: true,
//   // host: 'www.baidu.com',
//   // port: null,
//   // hostname: 'www.baidu.com',
//   // hash: null,
//   // search: '?name=node&age=30',
//   // query: 'name=node&age=30',
//   // pathname: '/index.php',
//   // path: '/index.php?name=node&age=30',
//   // href: 'http://www.baidu.com/index.php?name=node&age=30' 
//   'name':'node',
//   'age':30
// },',',"+");
// var cc = url.resolve('http://www.baidu.com/','index.php');
// console.log(bb);


// var people = {
// 	name : 'Jack',
// 	 sex : '男',
// 	 age : 30,
// 	show : function(){
// 		console.log('my name is ' + this.name + ',I am ' + this.age);
// 	}
// }
// module.exports = people.show();


// function People(name,age){
// 	this.name = name;
// 	 this.age = age;
// 	this.show = function(){
// 		console.log('我的名字叫：'+this.name+'，我今年：'+this.age+'岁了。');
// 	}
// }
// function Pow(r){
// 	function square(){
// 		return Math.pow(r,2);
// 	}
// 	function area(){
// 		return '半径为'+r+'的圆的面积为：'+Math.PI * square();
// 	}
// 	return {area:area};
// }
// module.exports = {
// 	People : People,
// 	Pow : Pow,
// 	PI : Math.PI
// }

// (function(exports,require,module,_filename,_dirname){
// 	 function Area(r){
// 		this.r = r;
// 		this.area = function(){
// 			return Math.PI * r * r;
// 		}
// 	 }
// 	module.exports = Area;
// })

function Hello(){
	var name;
	this.info = function(set_name){
		name = set_name;
	}
	this.show = function(){
		console.log('name:' + name);
	}
}
module.exports = Hello;