import React from 'react';
import StudentAverage from './StudentAverage';
import '../css/style.css';
import TestScores from './TestScores';
import Collapsible from './Collapsible';

const StudentItem = ({ studentInfo }) => {
	return (
		<div className="d-flex border-bottom border-1">
			<img
				className="studentPicture mt-3 border border-1 rounded-circle"
				src={studentInfo.pic}
				alt="student"
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
						<Collapsible />
						<TestScores grades={studentInfo.grades} />
					</ul>
				</div>
			</div>
		</div>
	);
};

export default StudentItem;
