import React from 'react';

export default React.createClass({

	getInitialState() {
		return {
			message : '',
			story : ''
		}
	},

	componentDidMount(){
		this.props.socket.on('pushData', function(data){
			this.setState({story: data.story});
		}.bind(this));
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

	render() {
		return <div>
			<h2>Start Making a Story</h2>
			<input className="story-text" type="text" onKeyDown={this.handleKeyDown} onChange={this.handleChange} value={this.state.message}/>
			<div className="story">{this.state.story}</div>
		</div>;
	}
});
