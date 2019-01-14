import styled from 'styled-components';
import Theme from '../../styles/theme';

const { fonts } = Theme;

const ContentWrapper = styled.div`
	padding: 10px;
`;

const Container = styled.div`
	width: 280px;
	height: 200px;
	cursor: pointer;
	display: inline-block;
	margin-right: 10px;
	border: solid 1px ${Theme.colors.grey[100]};
	padding: 0px;
`;

const ImageWrapper = styled.div`
	width 100%;
	height: 140px;
	overflow: hidden;
`;

const Title = styled(fonts)`
	font-weight: bold;
	font-size: 16px;
	margin: 0px;
`;

const Author = styled(fonts)`
	font-weight: bold;
	font-size: 9px;
	margin: 0px;
	margin-top: 10px;
	color: #6e6e6e;
`;

export { Container, Author, ImageWrapper, Title, ContentWrapper };
