import React, { useState } from 'react';
import StudentAverage from './StudentAverage';
import '../css/style.css';
import TestScores from './TestScores';
import Collapsible from './Collapsible';
import StudentContex from '../context/StudentContex';

const StudentItem = ({ studentInfo }) => {
	const [showResults, setShowResults] = useState(false);

	const toggle = () => {
		//console.log('ONCLICK WORKS' + 'showResults:' + showResults);
		if (showResults) {
			return setShowResults(false);
		}
		setShowResults(true);
	};

	return (
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
						{showResults ? <TestScores grades={studentInfo.grades} /> : null}
					</ul>
				</div>
			</div>

			<button className="toggle   ms-auto" onClick={toggle}>
				{showResults ? '-' : '+'}
			</button>
		</div>
	);
};

export default StudentItem;
