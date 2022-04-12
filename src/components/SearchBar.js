import React from 'react';
import SearchContext from '../context/SearchContext';

const SearchBar = () => {
	const renderSearchBar = (term) => {
		//console.log(term);
		return (
			<input
				type="text"
				placeholder=""
				onChange={(event) => {
					term.onChangeSearchTerm(event.target.value);
				}}
				value={term.searchTerm}
			/>
		);
	};

	return (
		<SearchContext.Consumer>
			{(term) => renderSearchBar(term)}
		</SearchContext.Consumer>
	);
};

export default SearchBar;
