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
			return this.video.play();
		else
			return this.video.pause();
	}

	componentWillReceiveProps(nextProps) {
		if(nextProps.pause !== this.props.pause)
			this.togglePlay();
	}

	render() {
		const {
			handleLoadedMetaData,
			handleToggleSeeked,
			handleTimeUpdate,
			autoplay,
			src
		} = this.props;

		return (
			<Container>
				<Content
					innerRef={element => this.video = element}
					onLoadedMetadata={handleLoadedMetaData}
					onTimeUpdate={handleTimeUpdate}
					onSeeking={handleToggleSeeked}
					onSeeked={handleToggleSeeked}
					autoPlay={autoplay}
					src={src}
				/>
			</Container>
		)
	}
}

export default Video;