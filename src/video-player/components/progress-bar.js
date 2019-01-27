import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
	grid-area: progress;
	color: #fff;
	padding: 5px 0px;
	width: 98%;
	display: flex;
	font-size: 14px;
	align-items: center;
`;

const Progress = styled.input`
	-webkit-appearance: none;  /* Override default CSS styles */
	appearance: none;
	width: 100%; /* Full-width */
	height: 3px; /* Specified height */
	background: #999;
	outline: none;

	&::-webkit-slider-thumb {
		-webkit-appearance: none;
		appearance: none;
		width: 15px;
		height: 15px;
		border-radius: 50%;
		background: #e1e1e1;
		cursor: pointer;
		transition: .3s;
	}

	&:hover::-webkit-slider-thumb {
		background: white;
	}
`;

function ProgressBar(props) {
	return (
		<Container>
			<Progress
				type="range"
				min={0}
				max={props.duration}
				value={props.value}
				onChange={props.handleProgressChange}
			/>
		</Container>
	)
}

export default ProgressBar;