import React from 'react';
import styled from 'styled-components';

const Container = styled.h3`
	padding: 5px 7px;
	font-size: 16px;
	font-weight: 700;
	background: rgba(0, 0, 0, .3);
	color: #fff;
	position: absolute;
	top: 20px;
	left: 3%;
	font-family: Monserrat;
`;

function Title({ title }) {
	return <Container>{title}</Container>;
}

export default Title;