import React from 'react';
import PopUpComponent from './PopUpComponent';
import SimulateComponent from './SimulateComponent';

export default React.createClass({

	getInitialState() {
		return {
			message : '',
			story : this.props.storeddata,
			userNameEntered: false,
			userName: '',
			imageSrc: '',
		}
	},

	componentWillReceiveProps(nextProps) {
		this.setState({'story' : nextProps.storeddata});
	},

	componentDidMount(){
		this.props.socket.on('newStory', data => {
			let preData = this.state.story;
			preData.push({'message': data.message, 'userName': data.name})
			this.setState({story: preData});
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
	    		'message' : this.state.message,
	    		'name' : this.state.userName,
	    		'imageSrc' : ''
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
		let preData = this.state.story;
		preData.push({'imageSrc' : url, 'message': ''})
		this.setState({story: preData});
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
						<div className="story">
							{this.state.story.map(o => {
								return <span>
									<span> {o.message} </span>
									{o.imageSrc ? <image className="img-tooltip" src={o.imageSrc} /> : ''}
								</span>
							})}
						</div>
					</div>
				</div>
			 :
			 <PopUpComponent handleUserNameEntered={this.handleUserNameEntered}/>
			}
		</div>;
	}
});
