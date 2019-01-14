import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
	width: 70%;
	height: auto;
	max-width: 600px;
	position: fixed;
	top: 25vh;
	left: 0;
	right: 0;
	background: #fff;
	padding: 20px;
	margin: auto;
	border-radius: 5px;
	box-shadow: 0px 0px 20px rgba(0,0,0,.7) ;
`;

const Close = styled.div`
	width: 40px;
	height: 40px;
	position: absolute;
	top: -13px;
	right: -13px;
	border-radius: 50%;
	background: #fff;
	box-shadow: 0px 0px 10px rgba(0,0,0,.3) ;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;

	&:after {
		content: 'x';
		font-size: 22px;
		font-family: helvetica;
	}
`;

function Modal (props) {
	return (
		<Container>
			<Close onClick={props.handleClick} /> 
			{ props.children }
		</Container>
	)
}

export default Modal;
