import React, { useState, useEffect, useRef } from 'react';
import TagContext from '../context/TagContext';
import '../css/tagStyle.css';

export const TagsInput = ({ checkTags }) => {
	// function makeid(length) {
	// 	var result = '';
	// 	var characters =
	// 		'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	// 	var charactersLength = characters.length;
	// 	for (var i = 0; i < length; i++) {
	// 		result += characters.charAt(Math.floor(Math.random() * charactersLength));
	// 	}
	// 	return result;
	// }

	const addTag = (tags, onChangeSetTags) => {
		return (event) => {
			if (event.key !== 'Enter') return;
			const keyValue = event.target.value;
			if (!keyValue.trim()) return;
			onChangeSetTags([...tags, keyValue]);
			event.target.value = '';
		};
	};

	// const removeTag = (tags, onChangeSetTags, index) => {
	// 	onChangeSetTags(tags.filter((item, i) => index !== i));
	// };

	const renderTag = (value) => {
		return (
			<div className="d-flex flex-column ">
				<div className="tags-input-container d-flex flex-row ">
					{value.tags.map((tag, index) => (
						<div className="tag-item" key={index}>
							<span className=" tag-item-text">{tag}</span>
							{/* <span
								className="text"
								onClick={() =>
									removeTag(value.tags, value.onChangeSetTags, index)
								}
							>
								&times;
							</span> */}
						</div>
					))}
				</div>
				<input
					className="tags-input"
					onKeyDown={addTag(value.tags, value.onChangeSetTags)}
					type="text"
					placeholder="Add a tag"
				/>
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
