import React from 'react';
import StoryComponent from './components/StoryComponent';
import SimulateComponent from './components/SimulateComponent';

const socket = io.connect('http://localhost:3000');

let PageComponent = React.createClass({
	render() {
		return <div>
			<StoryComponent socket={socket}/>
			<SimulateComponent socket={socket}/>

		</div>;
	}
});

React.render(<PageComponent />,document.getElementById("container"));
