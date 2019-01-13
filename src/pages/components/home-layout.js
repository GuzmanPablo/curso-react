import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
	width: 100%;
	display: grid;
	grid-template-rows: 100px auto;
	grid-template-columns: 20% 80%;
	grid-template-areas:
		'logo search'
		'realted categories';
`;

function HomeLayout(props) {
	return(
		<Container>
			{props.children}
		</Container>
	)
}

export default HomeLayout;