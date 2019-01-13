import React, { Component } from 'react';

import Related from '../components/related'
import HomeLayout from '../components/home-layout';

import Categories from '../../categories/component/categories';

class Home extends Component {
	render() {
		return (
			<HomeLayout>
				<Related />
				<Categories categories={this.props.data.categories} />
			</HomeLayout>
		)
	}
}

export default Home;
