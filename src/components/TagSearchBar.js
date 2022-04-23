import React from 'react';
import SearchContext from '../context/SearchContext';
import searchBarStyle from '../css/searchBarStyle.css';

export const TagSearchBar = () => {
	const renderSearchBar = (value) => {
		const { searchTagTerm, onChangeSearchtagTerm } = value;
		return (
			<input
				className="searchBar pt-2 "
				type="text"
				placeholder="Search by tag"
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
