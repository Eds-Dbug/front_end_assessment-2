import React, { useState, useEffect, useRef } from 'react';
import '../css/style.css';
import { TagItem } from './TagItem';

const StudentItem = ({ studentInfo, searchTagTerm }) => {
	const [tagData, setTagData] = useState(['']);

	//HAVE TO LOWER CASE EVERYTHING and we good i think
	//tagData.includes(searchTagTerm) || !searchTagTerm
	const checkTags = (data, ID) => {
		setTagData(tagData.concat(data));
		//	console.log(`'tagdata: ${tagData} ID: ${ID}`);
	};

	return (
		<div>
			{//TESTING THE BRANCH}
			{console.log(toggle(tagData, searchTagTerm))}
			{tagData.includes(searchTagTerm) ? (
				<TagItem studentInfo={studentInfo} checkTags={checkTags} />
			) : null}
		</div>
	);
};

export default StudentItem;
