import React from 'react';
import StoryComponent from './components/StoryComponent';

const socket = io.connect();

let PageComponent = React.createClass({

	getInitialState(){
		return {
			'storeddata' : []
		}
	},
	
	componentDidMount(){
		socket.on('onNewUser', storeddata => {
			this.setState({storeddata: storeddata});
		})
	},

	render() {
		return <div>
			<StoryComponent storeddata={this.state.storeddata} socket={socket}/>
		</div>;
	}
});

React.render(<PageComponent />,document.getElementById("container"));
