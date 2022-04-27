import React, { useState, useEffect, useRef } from 'react';
import TagContext from '../context/TagContext';
import '../css/style.css';

/**
 * @returns A form for tags to be added.
 */
export const TagsInput = () => {
	/**
	 *
	 * @param {Array} tags - An array (state) of all the stored tags.
	 * @param {Function} onChangeSetTags - A function that sets the state of the tags array.
	 * @returns A tag
	 */
	const addTag = (tags, onChangeSetTags) => {
		return (event) => {
			if (event.key !== 'Enter') return;
			const keyValue = event.target.value;
			if (!keyValue.trim()) return;
			onChangeSetTags([...tags, keyValue]);
			event.target.value = '';
		};
	};

	// /**
	//  *
	//  * @param {Array} tags - An array (state) of all the stored tags.
	//  * @param {Function} onChangeSetTags - A function that sets the state of the tags array.
	//  * @param {Number} index - The index of the individual tag to be removed.
	//  */
	// const removeTag = (tags, onChangeSetTags, index) => {
	// 	onChangeSetTags(tags.filter((item, i) => index !== i));
	// };

	/**
	 *
	 * @param {Object} tagInfo - the information on the individual tag.
	 * @param {Array} tags - An array (state) of all the stored tags.
	 * @returns A rendered form of tags.
	 */
	const renderTag = (tagInfo) => {
		return (
			<div className="d-flex flex-column ">
				<div className="tags-input-container d-flex flex-row w-50 mt-2 mb-1">
					{tagInfo.tags.map((tag, index) => (
						<div className="tag-item rounded p-2 m-1" key={index}>
							<span className=" tag-item-text">{tag}</span>
							{/* <span
								className="text"
								onClick={() =>
									removeTag(tagInfo.tags, tagInfo.onChangeSetTags, index)
								}
							>
								&times;
							</span> */}
						</div>
					))}
				</div>
				<input
					className="tags-input "
					onKeyDown={addTag(tagInfo.tags, tagInfo.onChangeSetTags)}
					type="text"
					placeholder="Add a tag"
				/>
			</div>
		);
	};

	return (
		<TagContext.Consumer>{(tagInfo) => renderTag(tagInfo)}</TagContext.Consumer>
	);
};
