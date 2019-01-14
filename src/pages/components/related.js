import React from 'react';
import styled from 'styled-components';
import logo from '../../../public/images/logo.png';

const Logo = styled.img`
	min-width: 200px;
	max-width: 350px;
	width: ${props => props.w || '100%'};
	grid-area: logo;
	justify-self: center;
	align-self: center;
`;

function Related(prop) {
	return (
		<Logo src={logo} w='80%' />
	)

}

export default Related;