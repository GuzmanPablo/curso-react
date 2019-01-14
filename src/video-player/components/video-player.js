import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
	width: inherit;
	height: auto;
	position: relative;
	z-index: 0;
`;

function VideoPlayer(props) {
	return (
		<Container>{props.children}</Container>
	)
}

export default VideoPlayer;