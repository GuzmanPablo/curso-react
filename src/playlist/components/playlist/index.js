import React from 'react';
import Media from '../media/index';

import './index.css';

function Playlist(props) {
	const { description, title, playlist } = props;

	return (
		<div className="playlist">
			<p className="playlist__text">{description}</p>
			<h2 className="playlist__text playlist__text--title">{title}</h2>
			<div className="playlist__container">
			{
				playlist.map((item) => {
					return <Media {...item} key={item.id} />
				})
			}
			</div>
		</div>
	);
}

export default Playlist;