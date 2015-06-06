import React from 'react';

export default React.createClass({

	getInitialState() {
		return {
			user : ''
		}
	},

	handleClick(event) {
		let name = this.refs.name.props.value;
		this.props.handleUserNameEntered(name);
	},

	handleChange(event) {
    	this.setState({user: event.target.value});
  	},

	render() {
		return <div className="popup">
			<p> Type your Nick</p>
			<input className="nick" ref="name" type="text" onChange={this.handleChange} value={this.state.user} />
			<button className="button" onClick={this.handleClick} >Submit</button>
		</div>
	}
});
