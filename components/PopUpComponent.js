import React from 'react';

export default React.createClass({

	handleClick(e) {
		let name = this.ref.name.getDOMNode(value);
		console.log(name);
	},

	render() {
		return <div className="popup">
			Write Your Name?
			<input ref="name" type="text" value="" />
			<button className="button" onClick={this.handleClick}>Submit</button>
		</div>
	}
});
