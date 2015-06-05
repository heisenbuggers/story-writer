import React from 'react';

export default React.createClass({

	canvasPlane : '',
	context : '',

	getInitialState(){
		return {
			pattern: [],
			started: false
		}
	},

	componentDidMount() {
		this.canvasPlane = this.refs.drawPlane.getDOMNode();
		this.context = this.canvasPlane.getContext('2d');
		this.canvasPlane.addEventListener('mousedown', this.drawCanvas);
		this.canvasPlane.addEventListener('mousemove', this.drawCanvas);
		this.canvasPlane.addEventListener('mouseup', this.drawCanvas);
	},

	componentWillUnmount() {
		this.canvasPlane.removeEventListener('mousedown', this.drawCanvas);
		this.canvasPlane.removeEventListener('mousemove', this.drawCanvas);
		this.canvasPlane.removeEventListener('mouseup', this.drawCanvas);
	},

	_mousedown(x, y) {
		this.context.beginPath();
		this.context.moveTo(x, y);
		this.setState({started: true});
	},

	_mousemove(x, y){
		if (this.state.started) {
			this.context.lineTo(x, y);
			this.context.stroke();
		}
	},

	_mouseup(x, y){
		if (this.state.started) {
			this._mousemove(x, y);
			this.setState({started: false});
		}
	},

	drawCanvas(e){
		let x, y;

		if (e.layerX || e.layerX == 0) {
			x = e.layerX;
			y = e.layerY;
		} else if (e.offsetX || e.offsetX == 0) {
			x = e.offsetX;
			y = e.offsetY;
		}

		let func = e.type;
		if (func) {
			this['_'+func](x, y);
		}
	},

	render() {
		return <div>
			<canvas ref="drawPlane" width="500px" height="500px"/>
		</div>
	}
});