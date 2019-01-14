import React, { Component } from 'react';
import RegularError from '../component/regular-error';

class HandlerError extends Component {
	state = {
		error: false,
		stack: null,
		message: null
	}

	componentDidCatch(error, reason) {
		this.setState({
			error: true,
			stack: reason.componentStack,
			message: error.message
		});
	}

	render() {
		if (this.state.error)
			return <RegularError stack={this.state.stack} message={this.state.message} />;
		
		return this.props.children;
	}
}

export default HandlerError;