import React from 'react';
import PopUpComponent from './PopUpComponent';
import SimulateComponent from './SimulateComponent';

export default React.createClass({

	getInitialState() {
		return {
			message : '',
			story : '',
			userNameEntered: false,
			userName: '',
			imageSrc: '',
		}
	},

	componentDidMount(){
		this.props.socket.on('newStory', data => {
			let preData = this.state.story;
			this.setState({story: preData + ' ' + data.story});
			this.refs.storyInput.getDOMNode('value').value = '';
		});
	},

	handleChange(e) {
    	this.setState({message: e.target.value});
  	},

  	handleKeyDown(e){
  		let ENTER = 13;
        if( e.keyCode == ENTER ) {
            this.props.socket.emit('onType', {
	    		'story' : this.state.message,
	    		'name' : this.state.userName
    		});
        }
  	},

  	handleUserNameEntered(name) {
  		this.setState({
  			userNameEntered: true,
  			userName : name
  		});
  	},

  	handleImageRendering(url) {
  		this.setState({
  			imageSrc : url
  		});
  	},

	render() {
		return <div>
			<h1>Start Making a Story</h1>
			{this.state.userNameEntered ?
				<div>
					<div className="left-side">
						<input ref="storyInput" className="story-text" type="text" onKeyDown={this.handleKeyDown}
							onChange={this.handleChange} value={this.state.message} placeholder={"start typing " + this.state.userName} />
						<SimulateComponent socket={this.props.socket} userName={this.state.userName} 
							handleImageRendering={this.handleImageRendering} />
					</div>
					<div className="right-side">
						<div className="story">{this.state.story}</div>
						<image src={this.state.imageSrc} />
					</div>
				</div>
			 :
			 <PopUpComponent handleUserNameEntered={this.handleUserNameEntered}/>
			}
		</div>;
	}
});
