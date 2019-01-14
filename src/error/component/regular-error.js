import React from 'react';

function RegularError(props) {
	const { message, stack } = props;
	return (
		<h1>Error: {message}</h1>
	)
}

export default RegularError;