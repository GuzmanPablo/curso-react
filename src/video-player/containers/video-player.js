import React, { Component } from 'react';

import VideoPlayer from '../components/video-player';
import PlayPause from '../components/play-pause'
import Video from '../components/video';
import Timer from '../components/timer';
import ContainerControls from '../components/video-player-controls';

class VideoPlayerContainer extends Component {
	state = {
		pause: true,
		duration: 0
	}

	handlerToggleClick = () => {
		this.setState({
			pause: !this.state.pause
		})
	}

	handleLoadedMetaData = event => {
		this.video = event.target;
		this.setState({
			duration: this.video.duration 
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
					handleLoadedMetaData={this.handleLoadedMetaData}
					autoplay={this.props.autoplay}
					pause={this.state.pause}
					src='http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4'
				/>
				<ContainerControls>
					<PlayPause
						handleClick={this.handlerToggleClick}
						pause={this.state.pause}
					/>
					<Timer
						duration={this.state.duration}
					/>
				</ContainerControls>
			</VideoPlayer>
		)
	}
}

export default VideoPlayerContainer;