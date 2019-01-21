import React, { Component } from 'react';

import VideoPlayer from '../components/video-player';
import PlayPause from '../components/play-pause'
import Video from '../components/video';
import Timer from '../components/timer';
import ContainerControls from '../components/video-player-controls';
import ProgressBar from '../components/progress-bar';
import Spinner from '../components/spinner';
import Volume from '../components/volume';
import FullScreen from '../components/full-screen';

class VideoPlayerContainer extends Component {

	state = {
		pause: true,
		duration: 0,
		currentTime: 0,
		seeking: false
	}

	handleToggleClick = () => {
		const pause = !this.state.pause;
		this.setState({ pause });
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
		const seeking = !this.state.seeking;
		this.setState({ seeking });
	}

	handleProgressChange = event => {
		const { value: currentTime } = event.target;
		Object.assign(this.video, { currentTime });
	}

	handleVolumeRange = event => {
		const volume = event.target.value;
		Object.assign(this.video, { volume });
	}

	handleToggleMute = () => {
		const volume = !!this.video.volume ? 0 : 1;
		Object.assign(this.video, { volume });
	}

	handleToggleFullScreen = () => {
		const fullScreen = this.player.requestFullScreen
			|| this.player.webkitRequestFullscreen
			|| this.player.mozRequestFullScreen
			|| this.player.msRequestFullscreen;
		const exitFullScreen = this.player.exitFullScreen
			|| this.player.webkitExitFullscreen
			|| this.player.mozCancelFullScreen
			|| this.player.msExitFullscreen;
		const isFullScreen = document.fullscreen
			|| document.webkitIsFullScreen
			|| document.mozFullScreen;
		return !isFullScreen ? fullScreen() : exitFullScreen();
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
		const pause = !this.props.autoplay;
		this.setState({ pause });
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
			<VideoPlayer
				innerRef={elem => this.player = elem}
			>
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
					<Volume
						handleVolumeRange={this.handleVolumeRange}
						handleToggleMute={this.handleToggleMute}
					/>
					<FullScreen
						handleToggleFullScreen={this.handleToggleFullScreen}
					/>
				</ContainerControls>
			</VideoPlayer>
		)
	}
}

export default VideoPlayerContainer;