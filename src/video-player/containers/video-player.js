import React, { Component } from 'react';

import VideoPlayer from '../components/video-player';
import PlayPause from '../components/play-pause'
import Video from '../components/video';
import Timer from '../components/timer';
import ContainerControls from '../components/video-player-controls';
import ProgressBar from '../components/progress-bar';
import Spinner from '../components/spinner';

class VideoPlayerContainer extends Component {

	state = {
		pause: true,
		duration: 0,
		currentTime: 0,
		seeking: false
	}

	handleToggleClick = () => {
		this.setState({
			pause: !this.state.pause
		})
	}

	handleProgressChange = event => {
		const { value } = event.target;
		this.video.currentTime = value;
	}

	handleLoadedMetaData = event => {
		this.video = event.target;
		const { duration } = this.video;
		this.setState({ duration });
	}

	handleTimeUpdate = () => {
		const { currentTime } = this.video;
		this.setState({ currentTime });
	}

	handleToggleSeeked = () => {
		this.setState({
			seeking: !this.state.seeking
		})
	}

	static formattedTime(secs) {
		const  leftPad = number => {
			const pad = '00';
			return pad.substring(0, pad.length - number.length) + number;
		}

		const minutes = parseInt(secs/60, 10).toString();
		const seconds = parseInt(secs%60, 10).toString();
		return `${leftPad(minutes)}:${leftPad(seconds)}`;
	}

	componentDidMount() {
		this.setState({
			pause: !this.props.autoplay
		})
	}

	render() {
		const self = VideoPlayerContainer;
		const {
			pause,
			seeking,
			duration,
			currentTime
		} = this.state;

		return (
			<VideoPlayer>
				<Spinner active={seeking}/>
				<Video
					handleLoadedMetaData={this.handleLoadedMetaData}
					handleTimeUpdate={this.handleTimeUpdate}
					handleToggleSeeked={this.handleToggleSeeked}
					autoplay={this.props.autoplay}
					pause={pause}
					src='http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4'
				/>
				<ContainerControls>
					<PlayPause
						handleClick={this.handleToggleClick}
						pause={pause}
					/>
					<Timer
						currentTime={self.formattedTime(currentTime)}
						duration={self.formattedTime(duration)}
					/>
					<ProgressBar
						handleProgressChange={this.handleProgressChange}
						duration={duration}
						value={currentTime}
					/>
				</ContainerControls>
			</VideoPlayer>
		)
	}
}

export default VideoPlayerContainer;