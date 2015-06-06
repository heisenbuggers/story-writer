import React from 'react';

export default React.createClass({

	getInitialState() {
		return {
			user : ''
		}
	},

	handleClick(e) {
		let name = this.refs.name.props.value;
		if(name.length > 0){
			this.props.handleUserNameEntered(name);
		}else{
			alert('Enter a Name');	
		}
	},

	handleChange(e) {
    	this.setState({user: e.target.value});
  	},

  	handleKeyDown(e) {
  		let ENTER = 13;
        if( e.keyCode == ENTER ) {
  			this.handleClick(e);
  		}
  	},

	render() {
		return <div className="popup">
			<p> Type your Nick</p>
			<input className="nick" ref="name" type="text" onKeyDown={this.handleKeyDown} onChange={this.handleChange} value={this.state.user} />
			<button className="button" onClick={this.handleClick} >Submit</button>
		</div>
	}
});
