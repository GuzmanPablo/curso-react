import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
	width: inherit;
`;

function VideoPlayer(props) {
	return (
		<Container>{props.children}</Container>
	)
}

export default VideoPlayer;