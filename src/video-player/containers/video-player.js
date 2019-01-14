import React, { Component } from 'react';

import VideoPlayer from '../components/video-player';
import PlayPause from '../components/play-pause'
import Video from '../components/video';

class VideoPlayerContainer extends Component {
	state = {
		pause: true
	}

	handlerToggleClick = () => {
		this.setState({
			pause: !this.state.pause
		})
	}

	componentDidMount() {
		this.setState({
			pause: !this.props.autoplay
		})
	}

	render() {
		return (
			<VideoPlayer>
				<Video
					autoplay={this.props.autoplay}
					pause={this.state.pause}
					src='http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4'
				/>
				<PlayPause
					handleClick={this.handlerToggleClick}
					pause={this.state.pause}
				/>
			</VideoPlayer>
		)
	}
}

export default VideoPlayerContainer;