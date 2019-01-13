import styled from 'styled-components';
import Theme from '../../styles/theme';

const { fonts } = Theme;

const Content = styled.div`
	padding-bottom: 20px;
	width: 100%;
`;

const Title = styled(fonts)`
	font-size: 22px;
	margin: 0px;
	margin-bottom: 10px;
`;

const Description = styled(fonts)`
	font-size: 12px;
	margin: 0px;
`;

const Wrapper = styled.div`
	width: auto;
	overflow-x: auto;
	overflow-y: hidden;
	white-space: nowrap;
`;

export { Content, Wrapper, Title, Description };