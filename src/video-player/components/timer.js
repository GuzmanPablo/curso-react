import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
	color: #fff;
	padding: 5px;
	display: flex;
	font-size: 14px;
	align-items: center;
`;

function Timer(props) {
	return (
		<Container>
			<p>00 / {props.duration}</p>
		</Container>
	)
}

export default Timer;