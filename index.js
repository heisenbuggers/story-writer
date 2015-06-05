import React from 'react';

const socket = io.connect('http://localhost:3000');

let StoryComponent =  React.createClass({

	getInitialState() {
		return {
			message : ''
		}
	},

	handleKeyUp() {
    	this.setState({message: event.target.value});
  	},

	render() {
		return <div>
			<h2>Start Making a Story</h2>
			<div className="story">
				<input className="story-text" type="text" value={this.state.message}/>
			</div>
		</div>;
	}
});

React.render(<StoryComponent socket={socket} />,document.getElementById("container"));
