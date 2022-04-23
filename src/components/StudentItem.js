import React, { useState, useEffect, useRef } from 'react';
import TagContext from '../context/TagContext';
import '../css/style.css';
import { TagItem } from './TagItem';

const StudentItem = ({ studentInfo, searchTerm, searchTagTerm }) => {
	const renderList = (value) => {
		return (
			<div>
				{/* {console.log(toggle(tagData, searchTagTerm))} */}
				{console.log(studentInfo.firstName)}
				{(value.tags.toString().includes(searchTagTerm) || !searchTagTerm) &&
				(studentInfo.firstName
					.toLowerCase()
					.includes(searchTerm.toLowerCase()) ||
					studentInfo.lastName
						.toLowerCase()
						.includes(searchTerm.toLowerCase()) ||
					!searchTerm) ? (
					<TagItem studentInfo={studentInfo} />
				) : null}
			</div>
		);
	};

	return (
		<TagContext.Consumer>{(value) => renderList(value)}</TagContext.Consumer>
	);
};

export default StudentItem;
