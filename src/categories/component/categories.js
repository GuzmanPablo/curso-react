import React from 'react';
import Category from './category';
import { Wrapper } from '../styles/categories';

function Categories(props) {
	return (
		<Wrapper>
		{
			props.categories.map(item => <Category key={item.id} {...item} />)
		}
		</Wrapper>
	)
}

export default Categories;
