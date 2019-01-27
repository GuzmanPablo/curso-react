import React from 'react';
import Playlist from '../../playlist/components/playlist';
import { Content, Wrapper, Description, Title } from '../styles/category';

function Category(props) {
	const { description, title, playlist, handleModalToggle } = props;

	return (
		<Content>
			<Description>{description}</Description>
			<Title>{title}</Title>
			<Wrapper>
				<Playlist
					playlist={playlist}
					handleModalToggle={handleModalToggle}
				/>
			</Wrapper>
		</Content>
	)
}

export default Category;