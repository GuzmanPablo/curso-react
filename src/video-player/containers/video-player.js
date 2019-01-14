import React, { Component } from 'react';
import VideoPlayer from '../components/video-player'

class VideoPlayerContainer extends Component {
	
	render() {
		return (
			<VideoPlayer>
				<video
					controls
					autoPlay
					src='http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4'
				/>
			</VideoPlayer>
		)
	}
}

export default VideoPlayerContainer;