(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
//jsx
var React = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);
var Hello = React.createClass({displayName: "Hello",
	getDefaultProps: function(){
		return {
			name: 'Jack'
		}
	},
	render: function(){
		return (
			React.createElement("li", null, this.props.text)
		);
	}
});
function HelloWorld(props){
	return React.createElement("p", null, props.name);
};
module.exports = {
	Hello: Hello,
	HelloWorld: HelloWorld
};

//es2015
// import React from 'react';
// class Hello extends React.Components{
// 	render(){
// 		return (
// 			<div>
// 				<p>Hello,{this.props.name}</p>
// 			</div>
// 		);
// 	}
// };
// export default Hello;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],2:[function(require,module,exports){
(function (global){
//jsx
var React = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);
var ReactDOM = (typeof window !== "undefined" ? window['ReactDOM'] : typeof global !== "undefined" ? global['ReactDOM'] : null);
var Hello = require('./js1.js');

var FactoryLi = React.createFactory(Hello.Hello);
var child1 = FactoryLi({text: 'First text!'});
var child2 = FactoryLi({text: 'Second text!'});
var child3 = FactoryLi({text: 'Third text!'});
var roots = React.createElement('ul',null,child1,child2,child3);
ReactDOM.render(roots,document.getElementById('root'));
ReactDOM.render(React.createElement(Hello.Hello, {text: "Forth text!"}),document.getElementById('root1'));
// ReactDOM.render(<Hello.HelloWorld name='Hello World!' >,document.getElementById('root2'));

//es2016
// import React from 'react';
// import ReactDOM from 'react-dom';
// import Hello from './js1';
// ReactDOM.render(<Hello name='World!' />,document.getElementById('root'));

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./js1.js":1}]},{},[1,2]);
