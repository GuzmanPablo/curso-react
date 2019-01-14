import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
	width: inherit;
`;

const Content = styled.video`
	width: inherit;
	vertical-align: moddle;
`;

class Video extends Component {

	togglePlay() {
		if(this.props.pause)
			this.video.play();
		else
			this.video.pause();
	}

	componentWillReceiveProps(nextProps) {
		if(nextProps.pause !== this.props.pause)
			this.togglePlay();
	}

	render() {
		return (
			<Container>
				<Content
					innerRef={element => this.video = element}
					autoPlay={this.props.autoplay}
					src={this.props.src}
				/>
			</Container>
		)
	}
}

export default Video;