import React from 'react';
import styled from 'styled-components';
import Theme from '../../styles/theme';

const { primary } = Theme.colors;

const Container = styled.div`
	width: 100%;
	display: grid;
	grid-template-rows: 100px auto;
	grid-template-columns: 20% 80%;
	grid-template-areas:
		'logo search'
		'realted categories';
	background: ${primary[500] || '#000'};
`;

function HomeLayout(props) {
	return(
		<Container>
			{props.children}
		</Container>
	)
}

export default HomeLayout;