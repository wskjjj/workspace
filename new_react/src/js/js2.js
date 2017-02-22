//jsx
// var React = require('react');
// var ReactDOM = require('react-dom');
// var Hello = require('./js1.js');

// var FactoryLi = React.createFactory(Hello.Hello);
// var child1 = FactoryLi({text: 'First text!'});
// var child2 = FactoryLi({text: 'Second text!'});
// var child3 = FactoryLi({text: 'Third text!'});
// var roots = React.createElement('ul',null,child1,child2,child3);
// ReactDOM.render(roots,document.getElementById('root'));
// ReactDOM.render(<Hello.Hello text='Forth text!' />,document.getElementById('root1'));
// // ReactDOM.render(<Hello.HelloWorld name='Hello World!' >,document.getElementById('root2'));

//es2016
import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './js1';
ReactDOM.render(<Hello />,document.getElementById('root2'));