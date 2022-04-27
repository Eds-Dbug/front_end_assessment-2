import React, { useState, useEffect, useRef } from 'react';
import TagContext from '../context/TagContext';
import '../css/style.css';
import { StudentRender } from './StudentRender';

/**
 *
 * @param {Object} studentInfo - The information of a student.
 * @param {String} nameSearchTerm - The search term for names.
 * @param {String} searchTagTerm - The search term for tags.
 * @returns A render of student if it matches the search filters
 */
export const Student = ({ studentInfo, nameSearchTerm, searchTagTerm }) => {
	const renderList = (value) => {
		return (
			<div>
				{(value.tags.toString().includes(searchTagTerm) || !searchTagTerm) &&
				(studentInfo.firstName
					.toLowerCase()
					.includes(nameSearchTerm.toLowerCase()) ||
					studentInfo.lastName
						.toLowerCase()
						.includes(nameSearchTerm.toLowerCase()) ||
					!nameSearchTerm) ? (
					<StudentRender studentInfo={studentInfo} />
				) : null}
			</div>
		);
	};

	return (
		<TagContext.Consumer>{(value) => renderList(value)}</TagContext.Consumer>
	);
};
