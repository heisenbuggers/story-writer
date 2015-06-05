import React from 'react';
import PopUpComponent from './components/PopUpComponent';
import StoryComponent from './components/StoryComponent';
import SimulateComponent from './components/StoryComponent';

const socket = io.connect('http://localhost:3000');

let PageComponent = React.createClass({
	render() {
		return <div>
			<SimulateComponent/>
		</div>;
	}
});

React.render(<PageComponent />,document.getElementById("container"));
