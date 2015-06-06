import React from 'react';
import StoryComponent from './components/StoryComponent';

const socket = io.connect('http://localhost:3000');

let PageComponent = React.createClass({
	render() {
		return <div>
			<StoryComponent socket={socket}/>
		</div>;
	}
});

React.render(<PageComponent />,document.getElementById("container"));
