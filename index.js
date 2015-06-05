import React from 'react';

let StoryComponent =  React.createClass({
	render() {
		return <div>
			<h2>Start Making a Story</h2>
			<div className="story">

			</div>
		</div>;
	}
});

React.render(<StoryComponent />,document.getElementById("container"));
