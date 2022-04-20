import React from 'react';
import SearchContext from '../context/SearchContext';

export const TagSearchBar = () => {
	const renderSearchBar = (value) => {
		const { searchTagTerm, onChangeSearchtagTerm } = value;
		return (
			<input
				type="text"
				placeholder="search for tag name"
				onChange={(event) => {
					onChangeSearchtagTerm(event.target.value);
				}}
				value={searchTagTerm}
			/>
		);
	};

	return (
		<SearchContext.Consumer>
			{(value) => renderSearchBar(value)}
		</SearchContext.Consumer>
	);
};
