import React from 'react';
import SearchContext from '../context/SearchContext';
import '../css/style.css';

/**
 *
 * @returns A searchbar of tags
 */
export const TagSearchBar = () => {
	/**
	 *
	 * @param {Object} tagInfo - the information on the individual tag.
	 * @param {Array} tags - An array (state) of all the stored tags.
	 * @param {Function} onChangeSetTags - A function that sets the state of the tags array.
	 * @returns A search bar to filter tags.
	 */
	const renderSearchBar = ({ searchTagTerm, onChangeSearchtagTerm }) => {
		//const { searchTagTerm, onChangeSearchtagTerm } = value;
		return (
			<input
				className="searchBar vw-100 pt-2 "
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
