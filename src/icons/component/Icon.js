import React from 'react';

function Icon(props) {
	const {
		color,
		size,
		children
	} = props;

	return (
		<svg width={size} height={size} fill={color} viewBox="0 0 32 32">
			{ children }
		</svg>
	);
}

export default Icon;