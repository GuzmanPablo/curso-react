import React from 'react';

import './index.css';
import Playlist from '../playlist';

function PlaylistMain(props) {
	const { categories } = props.data;
	
	return (
		<main>
			{ categories.map((item) => <Playlist {...item} key={item.id} />) }
		</main>
	);
}

export default PlaylistMain;