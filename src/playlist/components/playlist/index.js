import React from 'react';
import Media from '../media/index';
import { Content, Wrapper, Description, Title } from './style';

function Playlist(props) {
	const { description, title, playlist } = props;

	return (
		<Content>
			<Description>{description}</Description>
			<Title>{title}</Title>
			<Wrapper>
			{
				playlist.map(item => <Media {...item} key={item.id} />)
			}
			</Wrapper>
		</Content>
	);
}

export default Playlist;