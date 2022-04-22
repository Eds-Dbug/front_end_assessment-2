import React, { useState, useEffect, useRef } from 'react';
import TagContext from '../context/TagContext';
import '../css/style.css';

export const TagsInput = ({ checkTags }) => {
	function makeid(length) {
		var result = '';
		var characters =
			'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
		var charactersLength = characters.length;
		for (var i = 0; i < length; i++) {
			result += characters.charAt(Math.floor(Math.random() * charactersLength));
		}
		return result;
	}

	//console.log(makeid(5));

	const [ID, setID] = useState(makeid(5));
	const prevTags = useRef([]);

	// const checkTags1 = () => {
	// 	return checkTags(tags);
	// };

	//event is the lefthandside of the prop ,example: onKeyDown={addTag} onKeyDown is the event;

	const addTag = (onChangeSetTags) => {
		return (event) => {
			if (event.key !== 'Enter') return;
			const keyValue = event.target.value;
			if (!keyValue.trim()) return;
			//setTags([...tags, keyValue]);
			onChangeSetTags(keyValue);
			event.target.value = '';
		};
	};

	const removeTag = (tags, onChangeSetTags, index) => {
		//setTags(tags.filter((item, i) => index !== i));
		onChangeSetTags(tags.filter((item, i) => index !== i));
	};

	const renderTag = (value) => {
		return (
			<div className="d-flex justify-content-center align-content-center">
				{/* <p>Unique ID: {console.log(`Tags: ${tags} , ID: ${ID}`)}</p> */}
				<div className="tags-input-container border border-2">
					{value.tags.map((tag, index) => (
						<div className="tag-item" key={index}>
							<span className="text tag-item-text">{tag}</span>
							<span
								className="text"
								onClick={() =>
									removeTag(value.tags, value.onChangeSetTags, index)
								}
							>
								&times;
							</span>
						</div>
					))}
					<input
						className="tags-input"
						onKeyDown={addTag(value.onChangeSetTags)}
						type="text"
						placeholder="Type something"
					/>
				</div>
			</div>
		);
	};

	// return (
	//tags.filter((item)=> item.toLowerCase().includes(searchTerm.toLowerCase()))
	// );
	return (
		<TagContext.Consumer>{(value) => renderTag(value)}</TagContext.Consumer>
	);
};
