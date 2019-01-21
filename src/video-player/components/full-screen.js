import React from 'react';
import styled from 'styled-components';
import FullScreenIcon from '../../icons/component/FullScreen';

const Container = styled.div`
`;

function FullScreen(props) {
	return (
		<Container
			onClick={props.handleToggleFullScreen}
		>
			<FullScreenIcon
				size="25"
				color="white"
			/>
		</Container>
	)
}

export default FullScreen;