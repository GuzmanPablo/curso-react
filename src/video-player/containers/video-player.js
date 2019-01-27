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
import Title from '../components/title';

class VideoPlayerContainer extends Component {

	state = {
		pause: true,
		duration: 0,
		currentTime: 0,
		seeking: false,
		volume: 1
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
		this.setState({ volume });
	}

	handleToggleMute = () => {
		const volume = !!this.video.volume ? 0 : 1;
		Object.assign(this.video, { volume });
		this.setState({ volume });
	}

	handleToggleFullScreen = () => {
		const fullScreenKeys = ['requestFullscreen', 'webkitRequestFullscreen', 'mozRequestFullScreen', 'msRequestFullscreen'];
		const exitFullScreenKeys = ['exitFullscreen', 'webkitExitFullScreen', 'webkitExitFullscreen', 'mozCancelFullScreen', 'msExitFullscreen'];
		const isFullScreen = !!(document.fullscreen || document.webkitIsFullScreen || document.mozFullScreen);

		const execute = (reference, keys) => keys.forEach(key => reference[key] && reference[key]());
		const fullScreen = () => execute(this.player, fullScreenKeys);
		const exitFullScreen = () => execute(document, exitFullScreenKeys);

		return isFullScreen ? exitFullScreen() : fullScreen();
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

	setReference = element => {
		this.player = element;
	}

	render() {
		const self = VideoPlayerContainer;
		const { media } = this.props;
		console.warn(media);
		const {
			pause,
			volume,
			seeking,
			duration,
			currentTime
		} = this.state;

		return (
			<VideoPlayer
				setReference={this.setReference}
			>
				<Spinner active={seeking}/>
				<Title title={media.title} />
				<Video
					handleLoadedMetaData={this.handleLoadedMetaData}
					handleTimeUpdate={this.handleTimeUpdate}
					handleToggleSeeked={this.handleToggleSeeked}
					autoplay={this.props.autoplay}
					pause={pause}
					src={media.src}
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
						value={volume}
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