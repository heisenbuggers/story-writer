import React from 'react';

export default React.createClass({

	drawpatterns : [],

	getInitialState(){
		return {
			pattern: []
		}
	},

	componentDidMount() {
		document.addEventListener('mousedown', this.mouseDown);
		document.addEventListener('mouseup', this.mouseUp);
	},

	componentWillUnmount() {
		document.removeEventListener('mousedown', this.mouseDown);
		document.removeEventListener('mouseup', this.mouseUp);
	},

	mouseMove(e){
		this.drawpatterns.push({'x': e.clientX, 'y': e.clientY});
	},

	mouseDown(e) {
		document.addEventListener('mousemove', this.mouseMove);
		this.drawpatterns.push({'x': e.clientX, 'y': e.clientY});
	},

	mouseUp(e){
		document.removeEventListener('mousemove', this.mouseMove);
		console.log(this.drawpatterns);
		this.drawCanvas();
	},

	drawCanvas(){
		
	},

	render() {
		return <div>
			<canvas width="300px" height="300px"/>
		</div>
	}
});