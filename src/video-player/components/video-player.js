import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
	width: 100%;
	height: auto;
	position: relative;
	z-index: 0;
`;

function VideoPlayer(props) {
	return (
		<Container
			innerRef={props.setReference}
		>
		{props.children}
		</Container>
	)
}

export default VideoPlayer;