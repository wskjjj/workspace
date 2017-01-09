//jsx
// var React = require('react');
// var ReactDemo = React.createClass({
// 	render : function(){
// 		return (
// 			<div>
// 				<p>Hello {this.props.name}</p>
// 				<p><img src={require('../project/img/logo.png')} /></p>
// 			</div>
// 		)
// 	}
// });
// module.exports = ReactDemo;

//es6
import React,{Component} from 'react';
import img from '../project/img/logo.png';
import rootcss from './greeter.css';
class ReactDemo extends Component{
	render(){
		return (
			<div>
				<p>Hello {this.props.name}</p>
				<p><img src={img} className={rootcss.root} /></p>
			</div>
		)
	}
}
export default ReactDemo
