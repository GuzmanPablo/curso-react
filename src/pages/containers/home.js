import React, { Component } from 'react';

import Related from '../components/related'
import HomeLayout from '../components/home-layout';

import Categories from '../../categories/component/categories';
import Modal from '../../widgets/component/modal';
import HandlerError from '../../error/container/handler-error';
import ModalContainer from '../../widgets/container/modal';
import SearchContainer from '../../widgets/container/search';
import VideoPlayerContainer from '../../video-player/containers/video-player';

class Home extends Component {

	state = {
		modal: false,
	}

	handleToggleModal = () => {
		this.setState({
			modal: !this.state.modal
		})
	}

	render() {
		return (
			<HandlerError>
				<HomeLayout>
					<VideoPlayerContainer autoplay={true} />
					<Related />
					<SearchContainer />
					<Categories
						categories={this.props.data.categories}
						handleModalToggle={this.handleToggleModal}
					/>
					{
						this.state.modal &&
						<ModalContainer>
							<Modal handleClick={this.handleToggleModal}>
								<h2>Esto es un portal</h2>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam a neque aliquet, pellentesque orci ut, dignissim tellus. Donec nec felis quis elit volutpat tincidunt vel vel libero. Pellentesque vel sodales elit. Nunc mollis leo felis. Donec suscipit ullamcorper tincidunt. Phasellus luctus lacus ut dui pellentesque fermentum. Nunc varius nunc nec arcu finibus varius. Phasellus condimentum tortor at fringilla euismod.</p>
							</Modal>
						</ModalContainer>
					}
				</HomeLayout>
			</HandlerError>
		)
	}
}

export default Home;
