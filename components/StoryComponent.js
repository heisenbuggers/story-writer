import React from 'react';

export default React.createClass({

	getInitialState() {
		return {
			message : ''
		}
	},

	handleChange(event) {
    	this.setState({message: event.target.value});
    	this.props.socket.emit('onType', this.state.message);
  	},

	render() {
		return <div>
			<h2>Start Making a Story</h2>
			<div className="story">
				<input className="story-text" type="text" onChange={this.handleChange} value={this.state.message}/>
			</div>
		</div>;
	}
});
