import styled from 'styled-components';

const ContainerControls = styled.div`
	left: 3%;
	width: 96%;
	bottom: 20px;
	position: absolute;
	background: rgba(0, 0, 0, .3);
	border-radius: 10px;
	z-index: 1;
	display: grid;
	grid-template-columns: 40px 100px auto 40px 40px;
	grid-template-areas: "play timer progress volume fullscreen";
	padding: 10px;

	&>div {
		justify-self: center;
		align-self: center;
	}
	
`;

export default ContainerControls;