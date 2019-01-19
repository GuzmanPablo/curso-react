import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
	color: #fff;
	padding: 5px;
	display: flex;
	font-size: 14px;
	align-items: center;
`;

function Spinner({ active }) {
	if(!active) return false;

	return <h2>Cargando...</h2>;
}

export default Spinner;