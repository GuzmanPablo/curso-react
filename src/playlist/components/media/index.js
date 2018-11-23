import React,  { PureComponent } from 'react';
import PropTypes from 'prop-types';

import './index.css';

class Media extends PureComponent {

	state = {
		author: this.props.author
	}

	handlerClick = (event) => {
		this.setState({
			author: `> ${this.props.author} <`
		});
	}

	render() {
		const { props: { title, cover }, state: { author } } = this;

		return (
			<div className="media" onClick={this.handlerClick}>
				<img className="media__image" src={cover} alt={title} />
				<div className="media__wrapper">
					<h2 className="media__text media__text--title">{title}</h2>
					<p className="media__text media__text--author">{author}</p>
				</div>
			</div>
		);
	}
}

let title, cover, author, type;

title = cover = author = PropTypes.string.isRequired;
type = PropTypes.oneOf(['audio', 'video']);
Media.propTypes = { title, cover, author, type };

export default Media;