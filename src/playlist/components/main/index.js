import React from 'react';

import Main from './style';
import Playlist from '../playlist';

function PlaylistMain(props) {
	const { categories } = props.data;

	return (
		<Main>
		{
			categories.map(item => <Playlist {...item} key = {item.id} />)
		}
		</Main>
	);
}

export default PlaylistMain;