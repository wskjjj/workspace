//jsx
var React = require('react');
var Hello = React.createClass({
	render : function(){
		return (
			<div>
				<p>Hello,{this.props.name}</p>
			</div>
		);
	}
});
module.exports = Hello;

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