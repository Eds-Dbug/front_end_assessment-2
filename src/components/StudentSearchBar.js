import React from 'react';
import SearchContext from '../context/SearchContext';
import '../css/style.css';

/**
 *
 * @param {Object} studentInfo - The information of a student.
 * @param {String} nameSearchTerm - The search term for names.
 * @param {String} searchTagTerm - The search term for tags.
 * @returns A render of a search bar for filtering names.
 */
export const StudentSearchBar = () => {
	const renderSearchBar = ({ nameSearchTerm, onChangeSearchTerm }) => {
		return (
			<input
				className="searchBar vw-100 pt-2 border-bottom border-1"
				type="text"
				placeholder="Search by name"
				onChange={(event) => {
					onChangeSearchTerm(event.target.value);
				}}
				value={nameSearchTerm}
			/>
		);
	};

	return (
		<SearchContext.Consumer>
			{(value) => renderSearchBar(value)}
		</SearchContext.Consumer>
	);
};
