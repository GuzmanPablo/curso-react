import React,  { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Pause from '../../../icons/component/Pause';
import { Container, Author, ImageWrapper, Title, ContentWrapper } from './style';

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
			props: { title, cover },
			state: { author }
		} = this;

		return (
			<Container onClick={this.handlerClick}>
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