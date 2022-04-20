import React from 'react';
import SearchContext from '../context/SearchContext';

export const StudentSearchBar = () => {
	const renderSearchBar = (term) => {
		const { searchTerm, onChangeSearchTerm } = term;
		//console.log(term);
		return (
			<input
				type="text"
				placeholder="search for student name"
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
