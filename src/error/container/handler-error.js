import React, { Component } from 'react';
import RegularError from '../component/regular-error';

class HandlerError extends Component {
	state = {
		error: false,
		message: null
	}

	componentDidCatch(error, reason) {
		this.setState({
			error: true,
			message: error.message || 'Hay un error'
		});
	}

	render() {
		if (this.state.error)
			return <RegularError message={this.state.message} />;
		
		return this.props.children;
	}
}

export default HandlerError;