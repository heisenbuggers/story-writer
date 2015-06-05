import React from 'react';

export default React.createClass({

	getInitialState() {
		return {
			message : ''
		}
	},

	handleClick(event) {
		let name = this.refs.name.props.value;
		console.log(name);
	},

	handleChange(event) {
    	this.setState({message: event.target.value});
			console.log(this.state.message);
  },

	render() {
		return <div className="popup">
			Write Your Name?
			<input ref="name" type="text" onChange={this.handleChange} value={this.state.message} />
			<button className="button" onClick={this.handleClick} >Submit</button>
		</div>
	}
});
