import React from 'react';
import '../css/style.css';
import StudentContex from '../context/StudentContex';
import SearchContex from '../context/SearchContext';

/**
 *
 * @returns A Student element consisting of image, firstName, lastName, email, company, skill and  grades of the student
 */
const Student = () => {
	/**
	 *
	 * @param {*} grades
	 * Filter helper function for student name
	//  */
	// const filterStudent = (name) => {
	// 	console.log(name);
	// 	return <div></div>;
	// 	// return (student) => {
	// 	// 	return (
	// 	// 		student.firstName.toLowerCase().includes(name.toLowerCase()) ||
	// 	// 		student.lastName.toLowerCase().includes(name.toLowerCase()) ||
	// 	// 		!name
	// 	// 	);
	// 	// };
	// };

	/**
	 *
	 * @param {array} grades
	 * @returns A number
	 */
	const average = (grades) => {
		let sum = 0,
			len = grades.length,
			count = 0;
		for (let i = 0; i < len; i++) {
			sum += parseInt(grades[i]);
			count++;
		}

		return sum / count;
	};

	/**
	 *
	 * @param {array} value
	 * @returns A element consisting of image, firstName, lastName, email, company, skill and  grades of the student
	 */
	//afterwards give the object { pic, firstName, lastName, email, company, skill, grades } to the student contex so it can pass it to the renderlist instead
	const renderList = (value, { searchTerm }) => {
		console.log(searchTerm);
		return value
			.filter((val) => {
				return (
					val.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
					val.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
					!searchTerm
				);
			})
			.map(({ pic, firstName, lastName, email, company, skill, grades }) => {
				return (
					<div className="d-flex border-bottom border-1">
						<img
							className="studentPicture mt-3 border border-1 rounded-circle"
							src={pic}
							alt="student"
						/>

						<div className="studentInformation ms-5">
							<h1 className="fullName">{`${firstName.toUpperCase()} ${lastName.toUpperCase()}`}</h1>
							<div className="fieldSection ">
								<ul>
									<li className="field">{`Email: ${email}`}</li>
									<li className="field">{`Company: ${company}`}</li>
									<li className="field">{`Skill: ${skill}`}</li>
									<li className="field">{`Average: ${average(grades)}%`}</li>
									<br />
								</ul>
							</div>
						</div>
					</div>
				);
			});
	};

	return (
		<SearchContex.Consumer>
			{(term) => (
				<StudentContex.Consumer>
					{(value) => renderList(value, term)}
				</StudentContex.Consumer>
			)}
		</SearchContex.Consumer>
	);
};

export default Student;
