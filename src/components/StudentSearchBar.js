import React from 'react';
import SearchContext from '../context/SearchContext';
import searchBarStyle from '../css/searchBarStyle.css';

export const StudentSearchBar = () => {
	const renderSearchBar = (term) => {
		const { searchTerm, onChangeSearchTerm } = term;
		return (
			<input
				className="searchBar pt-2 border-bottom border-1"
				type="text"
				placeholder="Search by name"
				onChange={(event) => {
					onChangeSearchTerm(event.target.value);
				}}
				value={searchTerm}
			/>
		);
	};

	return (
		<SearchContext.Consumer>
			{(value) => renderSearchBar(value)}
		</SearchContext.Consumer>
	);
};
