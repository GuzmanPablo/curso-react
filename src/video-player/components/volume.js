import React from 'react';
import styled from 'styled-components';
import VolumeIcon from '../../icons/component/Volume';

const Container = styled.div`
	position: relative;
	grid-area: volume;
	width: 25px;
	height: 25px;
`;

const VolumeControl = styled.button`
	background: none;
	cursor: pointer;
	border: none;
	outline: none;
`;

const VolumeRange = styled.input`
	z-index: 2;
	display: none;
	transform: rotate(-90deg);
	transform-origin: left;
	position: absolute;
	left: 12px;
	top: -10px;

	${Container}:hover &,
	&:hover {
		display: block;
	}
`;

function Volume(props) {
	const {
		value,
		handleToggleMute,
		handleVolumeRange
	} = props;

	return (
		<Container>
			<VolumeControl
				onClick={handleToggleMute}
			>
				<VolumeIcon
					size={25}
					color='white'
				/>
			</VolumeControl>
			<VolumeRange
				type='range'
				step='.05'
				min='0'
				max='1'
				value={value}
				onChange={handleVolumeRange}
			/>
		</Container>
	)
}

export default Volume;