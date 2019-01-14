import React from 'react';
import Media from './media';
import { Wrapper } from '../styles/playlist';

function Playlist(props) {
	const { playlist, handleModalToggle } = props;

	return (
		<Wrapper>
		{
			playlist.map(item => (
				<Media
					{...item}
					key={item.id}
					handleModalToggle={handleModalToggle}
				/>
			))
		}
		</Wrapper>
	);
}

export default Playlist;