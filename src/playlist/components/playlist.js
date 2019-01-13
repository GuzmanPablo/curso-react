import React from 'react';
import Media from './media';
import { Wrapper } from '../styles/playlist';

function Playlist(props) {
	const { playlist } = props;

	return (
		<Wrapper>
		{
			playlist.map(item => <Media {...item} key={item.id} />)
		}
		</Wrapper>
	);
}

export default Playlist;