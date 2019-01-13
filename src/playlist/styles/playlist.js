import styled from 'styled-components';
import Theme from '../../styles/theme';

const {
	colors: { primary },
	fonts
} = Theme;

const Content = styled.div `
	padding-bottom: 20px;
	width: 100%;
`;

const Title = styled(fonts)`
	margin: 0px;
	font-size: 22px;
	margin-bottom: 10px;
`;

const Description = styled(fonts)`
	font-size: 12px;
	margin: 0px;
`;

const Wrapper = styled.div `
	width: auto;
	overflow-x: auto;
	overflow-y: hidden;
	white-space: nowrap;

	::-webkit-scrollbar {
		width: 100px;
		height: 10px;
	}

	::-webkit-scrollbar-thumb {
		border: solid 2px #fff;
		background-color: ${primary[500]};
		border-radius: 7px;
	}
`;

export {
	Content,
	Wrapper,
	Title,
	Description
};