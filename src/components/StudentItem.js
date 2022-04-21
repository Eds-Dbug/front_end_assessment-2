import React, { useState, useEffect, useRef } from 'react';
import StudentAverage from './StudentAverage';
import TestScores from './TestScores';
import '../css/style.css';

const StudentItem = ({ studentInfo, searchTagTerm }) => {
	const [tags, setTags] = useState([]);
	const [showResults, setShowResults] = useState(false);

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

	const getTags = () => {};

	/**
	 *
	 * function for filterring the tag name
	 */
	const tagFilter = () => {
		return tags.toString();
	};

	const toggle = () => {
		//console.log('ONCLICK WORKS' + 'showResults:' + showResults);
		if (showResults) {
			return setShowResults(false);
		}
		setShowResults(true);
	};

	const removeTag = (index) => {
		setTags(tags.filter((item, i) => index !== i));
	};

	const addTag = (event) => {
		if (event.key !== 'Enter') return;
		const keyValue = event.target.value;
		if (!keyValue.trim()) return;
		setTags([...tags, keyValue]);
		event.target.value = '';
	};

	return (
		<div>
			{console.log(tagFilter())}
			{tags.toString().includes(searchTagTerm) || !searchTagTerm ? (
				<div className="studentItem d-flex  border border-1">
					<img
						className="studentPicture mt-3 border border-1 rounded-circle "
						src={studentInfo.pic}
						alt="student"
						width="125"
						height="125"
					/>
					<div className="studentInformation ms-5">
						<h1 className="fullName">{`${studentInfo.firstName.toUpperCase()} ${studentInfo.lastName.toUpperCase()}`}</h1>
						<div className="fieldSection ">
							<ul>
								<li className="field">{`Email: ${studentInfo.email}`}</li>
								<li className="field">{`Company: ${studentInfo.company}`}</li>
								<li className="field">{`Skill: ${studentInfo.skill}`}</li>
								<StudentAverage grades={studentInfo.grades} />
								<br />
								{showResults ? (
									<TestScores grades={studentInfo.grades} />
								) : null}
							</ul>

							{/* TAGS */}
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
							{/* TAGS END*/}
						</div>
					</div>

					<button className="toggle ms-auto" onClick={toggle}>
						{showResults ? '-' : '+'}
					</button>
				</div>
			) : null}
		</div>
	);
};

export default StudentItem;
