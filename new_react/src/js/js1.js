//jsx
// var React = require('react');
// var Hello = React.createClass({
// 	getDefaultProps: function(){
// 		return {
// 			name: 'Jack'
// 		}
// 	},
// 	render: function(){
// 		return (
// 			<li>{this.props.text}</li>
// 		);
// 	}
// });
// function HelloWorld(props){
// 	return <p>{props.name}</p>;
// };
// module.exports = {
// 	Hello: Hello,
// 	HelloWorld: HelloWorld
// };

//es2016
import React from 'react';
class Hello extends React.Components{
	constructor(props){
		super(props);
		this.handleChange = this.handleChange.bind(this);
		// this.state = {
		// 	value: '请输入'
		// }
	},
	getInitialState: function(){
		return {
			value: '请输入'
		}
	},
	handleChange: function(event){
		this.setState({
			value: event.target.value
		});
	},
	render(){
		return (
			<div>
				<label>
					<input type="text" onChange={this.handleChange} value={this.state.value} />
				</label>
			</div>
		);
	}
};
export default Hello;