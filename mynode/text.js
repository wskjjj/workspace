var uniq = require('uniq');
var nums = [4,2,2,3,1,0,5,6];
console.log(uniq(nums));


define(function(require,exports,module){
	var somemodule = require('somemodule');
	var anothermodule = require('anothermodule');
	somemodule.doSomeModule();
	anothermodule.doAnOtherModule();
	exports.asplode = function(){
		somemodule.doSomeModule();
		anothermodule.doAnOtherModule();
	}
})