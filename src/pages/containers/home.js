import React, { Component } from 'react';

import Related from '../components/related'
import HomeLayout from '../components/home-layout';

import Categories from '../../categories/component/categories';
import ModalContainer from '../../widgets/container/modal';
import Modal from '../../widgets/component/modal';

class Home extends Component {

	state = {
		modal: false,
		error: false
	}

	handleToggleModal = () => {
		this.setState({
			modal: !this.state.modal
		})
	}

	componentDidCatch(error, reason) {
		this.setState({
			error: true
		})
	}

	render() {
		if (this.state.error)
			return <h1> OOOhh!!! hay un error</h1>;

		return (
			<HomeLayout>
				<Related />
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
		)
	}
}

export default Home;
