import React from 'react';
import TestScores from './TestScores';
import StudentItem from './StudentItem';
import StudentContex from '../context/StudentContex';
import SearchContex from '../context/SearchContext';

/**
 *
 * @returns A Student element consisting of image, firstName, lastName, email, company, skill and  grades of the student
 */
const Student = () => {
	/**
	 *
	 * @param {array} value
	 * @returns A element consisting of image, firstName, lastName, email, company, skill and  grades of the student
	 */
	//afterwards give the object { pic, firstName, lastName, email, company, skill, grades } to the student contex so it can pass it to the renderlist instead
	const renderList = (value, { searchTerm }) => {
		//console.log(value);
		return value
			.filter((val) => {
				return (
					val.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
					val.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
					!searchTerm
				);
			})
			.map(({ pic, firstName, lastName, email, company, skill, grades }) => {
				const studentInfo = {
					pic,
					firstName,
					lastName,
					email,
					company,
					skill,
					grades,
				};
				//console.log(studentInfo);
				return <StudentItem studentInfo={studentInfo} />;
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
