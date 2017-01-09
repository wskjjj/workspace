var txt = require('./Greeter.js');
window.onload = function(){
	var root = document.getElementById('container');
	root.innerHTML = txt.data;
}

//jsx
// var React = require('react');
// var ReactDOM = require('react-dom');
// var DemoComponent = require('./reactDemo.js');
// ReactDOM.render(<DemoComponent name='the World' />,document.getElementById('container'));

//es6
import React from 'react';
import {render} from 'react-dom';
import ReactDemoComponent from './reactDemo';
render(<ReactDemoComponent name='the World' />,document.getElementById('root'));