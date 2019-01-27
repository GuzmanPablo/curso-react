import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
	grid-area: timer;
	color: #fff;
	padding: 5px;
	display: flex;
	font-size: 14px;
	align-items: center;
`;

function Timer(props) {
	const { currentTime, duration } = props;

	return (
		<Container>
			<p>{currentTime} / {duration}</p>
		</Container>
	)
}

export default Timer;