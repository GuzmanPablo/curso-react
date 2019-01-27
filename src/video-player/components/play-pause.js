import React from 'react';
import styled from 'styled-components';

import Play from '../../icons/component/Play';
import Pause from '../../icons/component/Pause';

const Container = styled.div`
	grid-area: play;
`;
const Button = styled.button`
	background: none;
	border: none;
	cursor: pointer;
	outline: none;
`;

function PlayPause(props) {
	return (
		<Container>
		{
			props.pause
			?
			<Button onClick={props.handleClick}>
				<Play size={25} color='white' />
			</Button>
			:
			<Button onClick={props.handleClick}>
				<Pause size={25} color='white' />
			</Button>
		}
		</Container>
	)
}

export default PlayPause;