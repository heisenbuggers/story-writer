import React from 'react';
import PopUpComponent from './PopUpComponent';

export default React.createClass({

	getInitialState() {
		return {
			message : '',
			story : '',
			userNameEntered: false,
			userName: ''
		}
	},

	componentDidMount(){
		this.props.socket.on('pushData', data => {
			this.setState({story: data.story});
		});
	},

	handleChange(e) {
    	this.setState({message: e.target.value});
  	},

  	handleKeyDown(e){
  		let ENTER = 13;
        if( e.keyCode == ENTER ) {
            this.props.socket.emit('onType', {
	    		'id' : this.props.socket.id,
	    		'story' : this.state.message
    		});
        }
  	},

  	handleUserNameEntered(name) {
  		this.setState({
  			userNameEntered: true,
  			userName : name
  		});
  	},

	render() {
		return <div>
			<h1>Start Making a Story</h1>
			{this.state.userNameEntered ? 
				<div>
					<input ref="storyInput" className="story-text" type="text" onKeyDown={this.handleKeyDown} 
						onChange={this.handleChange} value={this.state.message} placeholder={"start typing " + this.state.userName} />
					<div className="story">{this.state.story}</div>
				</div>
			 : 
			 <PopUpComponent handleUserNameEntered={this.handleUserNameEntered}/>
			}
		</div>;
	}
});
