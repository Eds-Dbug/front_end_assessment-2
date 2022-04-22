import React, { useState, useEffect, useRef } from 'react';
import TagContext from '../context/TagContext';
import '../css/style.css';
import { TagItem } from './TagItem';

const StudentItem = ({ studentInfo, searchTagTerm }) => {
	//const [tagData, setTagData] = useState(['']);

	//HAVE TO LOWER CASE EVERYTHING and we good i think
	//tagData.includes(searchTagTerm) || !searchTagTerm
	// const checkTags = (data, ID) => {
	// 	setTagData(tagData.concat(data));
	// 	//	console.log(`'tagdata: ${tagData} ID: ${ID}`);
	// };
	const renderList = (value) => {
		return (
			<div>
				{/* {console.log(toggle(tagData, searchTagTerm))} */}
				{console.log(value)}
				{value.tags.toString().includes(searchTagTerm) || !searchTagTerm ? (
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
