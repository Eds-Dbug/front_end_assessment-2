import React, { useState, useEffect, useRef } from 'react';
import StudentAverage from './StudentAverage';
import '../css/style.css';
import TestScores from './TestScores';
import { TagsInput } from './TagsInput';

const StudentItem = ({ studentInfo, searchTagTerm }) => {
	const [showResults, setShowResults] = useState(false);
	const [tagData, setTagData] = useState([]);

	const lower = (data) => {
		let toLower = data.map((element) => {
			console.log(element);
			return element.toLowerCase();
		});
		setTagData(toLower);
	};
	//HAVE TO LOWER CASE EVERYTHING and we good i think
	const checkTags = (data, ID) => {
		//console.log(typeof data);
		//console.log(`TagData: ${tagData} ID: ${ID}`);
		setTagData(data);
		lower(tagData);
		console.log(tagData);
	};

	//console.log(studentInfo);

	const toggle = () => {
		//console.log('ONCLICK WORKS' + 'showResults:' + showResults);
		if (showResults) {
			return setShowResults(false);
		}
		setShowResults(true);
	};

	return (
		<div className="studentItem d-flex  border border-1">
			{tagData.includes(searchTagTerm.toLowerCase()) ? <p>NAAAAAYYY</p> : null}
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
						{showResults ? <TestScores grades={studentInfo.grades} /> : null}
					</ul>

					<TagsInput checkTags={checkTags} />
				</div>
			</div>

			<button className="toggle   ms-auto" onClick={toggle}>
				{showResults ? '-' : '+'}
			</button>
		</div>
	);
};

export default StudentItem;
