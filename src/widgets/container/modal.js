import React, { Component } from 'react';
import { createPortal } from 'react-dom';

const container = document.getElementById('modal-container');

class ModalContainer extends Component {
	render() {
		return createPortal(this.props.children, container)
	}
}

export default ModalContainer;
