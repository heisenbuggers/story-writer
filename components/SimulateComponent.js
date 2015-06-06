import React from 'react';

export default React.createClass({

	canvasPlane : '',
	context : '',

	getInitialState(){
		return {
			started: false
		}
	},

	componentDidMount() {
		this.canvasPlane = this.refs.drawPlane.getDOMNode();
		this.canvasPlane.addEventListener('mousedown', this.drawCanvas);
		this.canvasPlane.addEventListener('mousemove', this.drawCanvas);
		this.canvasPlane.addEventListener('mouseup', this.drawCanvas);
		this.props.socket.on('sendURL', data => {
			this.props.handleImageRendering(data.imageSrc);
		});
	},

	componentWillUnmount() {
		this.canvasPlane.removeEventListener('mousedown', this.drawCanvas);
		this.canvasPlane.removeEventListener('mousemove', this.drawCanvas);
		this.canvasPlane.removeEventListener('mouseup', this.drawCanvas);
	},

	_mousedown(x, y, context) {
		context.beginPath();
		context.moveTo(x, y);
		this.setState({started: true});
	},

	_mousemove(x, y, context){
		if (this.state.started) {
			context.lineTo(x, y);
			context.stroke();
		}
	},

	_mouseup(x, y, context){
		if (this.state.started) {
			this._mousemove(x, y, context);
			this.setState({started: false});
		}
	},

	drawCanvas(e){
		let x, y;
		this.context = this.canvasPlane.getContext('2d');

		if (e.layerX || e.layerX == 0) {
			x = e.layerX;
			y = e.layerY;
		} else if (e.offsetX || e.offsetX == 0) {
			x = e.offsetX;
			y = e.offsetY;
		}

		let func = e.type;
		if (func) {
			this['_'+func](x, y, this.context);
		}
	},

	handleClick(e){
		var dataURL = this.canvasPlane.toDataURL();
		this.context.clearRect(0,0,this.canvasPlane.width,this.canvasPlane.height);
		this.props.socket.emit('sendPic', {
			'imageSrc' : dataURL,
			'name' : this.props.userName
		});
	},

	render() {
		return <div>
			<p>Draw the picture using your mouse. Fun!</p>
			<canvas className="draw-area" ref="drawPlane" width="500px" height="300px"/>
			<button className="send-image" onClick={this.handleClick}>Send Image</button>
		</div>
	}
});
