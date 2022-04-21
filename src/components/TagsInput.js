import React, { useState, useEffect, useRef } from 'react';
import SearchContext from '../context/SearchContext';
import '../css/style.css';

export const TagsInput = ({ checkTags, tagData }) => {
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

	const [tags, setTags] = useState([]);
	const prevTags = useRef([]);

	useEffect(() => {
		prevTags.current = tags;
		checkTags(prevTags.current, ID);
		//console.log(this.props);
	}, [tags]);

	// const checkTags1 = () => {
	// 	return checkTags(tags);
	// };

	//event is the lefthandside of the prop ,example: onKeyDown={addTag} onKeyDown is the event;

	const addTag = (event) => {
		if (event.key !== 'Enter') return;
		const keyValue = event.target.value;
		if (!keyValue.trim()) return;
		setTags([...tags, keyValue]);
		event.target.value = '';
	};

	const removeTag = (index) => {
		setTags(tags.filter((item, i) => index !== i));
	};

	const renderTag = (searchtagTerm) => {
		return (
			<div className="d-flex justify-content-center align-content-center">
				{/* <p>Unique ID: {console.log(`Tags: ${tags} , ID: ${ID}`)}</p> */}
				<div className="tags-input-container border border-2">
					{tags.map((tag, index) => (
						<div className="tag-item" key={index}>
							<span className="text tag-item-text">{tag}</span>
							<span className="text" onClick={() => removeTag(index)}>
								&times;
							</span>
						</div>
					))}
					<input
						className="tags-input"
						onKeyDown={addTag}
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
		<SearchContext.Consumer>
			{(value) => renderTag(value.searchTagTerm)}
		</SearchContext.Consumer>
	);
};
