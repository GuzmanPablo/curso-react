import React,  { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Container, Author, ImageWrapper, Title, ContentWrapper } from '../styles/media';

class Media extends PureComponent {
	state = {
		author: this.props.author
	}

	handlerClick = () => {
		this.setState({
			author: `> ${this.props.author} <`
		});
	}

	render() {
		const {
			props: { title, cover, handleModalToggle },
			state: { author }
		} = this;

		return (
			<Container onClick={handleModalToggle}>
				<ImageWrapper>
					<img src={cover} alt={title} width="100%" />
				</ImageWrapper>
				<ContentWrapper>
					<Title>{title}</Title>
					<Author>{author}</Author>
				</ContentWrapper>
			</Container>
		);
	}
}

const { string, oneOf } = PropTypes;

Media.propTypes = {
	title: string.isRequired,
	cover: string.isRequired,
	author: string.isRequired,
	type: oneOf(['audio', 'video'])
};

export default Media;