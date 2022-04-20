import React, { useState, useEffect } from 'react';
import TestScores from './TestScores';
import StudentItem from './StudentItem';
import StudentContex from '../context/StudentContex';
import SearchContex from '../context/SearchContext';

/**
 *
 * @returns A Student element consisting of image, firstName, lastName, email, company, skill and  grades of the student
 */
const Student = (term) => {
	const [showTag, setShowTag] = useState(true);

	// useEffect(() => {
	// 	if ((searchTagTerm = 'd')) {
	// 		setShowTag(false);
	// 	}
	// }, [searchTagTerm]);

	const tagFilter = () => {
		//console.log('ONCLICK WORKS' + 'showResults:' + showResults);
		if (showTag) {
			return setShowTag(false);
		}
		setShowTag(true);
	};

	/**
	 *
	 * @param {array} value
	 * @returns A element consisting of image, firstName, lastName, email, company, skill and  grades of the student
	 */
	//afterwards give the object { pic, firstName, lastName, email, company, skill, grades } to the student contex so it can pass it to the renderlist instead
	//so we need searchTagTerm from the
	const renderList = (value, { searchTerm, searchTagTerm }) => {
		//console.log(document.getElementsByClassName('field'));
		//console.log(searchTagTerm);

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
				// i can set null for student item if its not right
				// need to try and get student object

				return (
					<div>
						{showTag ? (
							<StudentItem
								studentInfo={studentInfo}
								searchTagTerm={searchTagTerm}
							/>
						) : null}
					</div>
				);
			});
	};

	return (
		<SearchContex.Consumer>
			{(term) => (
				<StudentContex.Consumer>
					{({ student }) => renderList(student, term)}
				</StudentContex.Consumer>
			)}
		</SearchContex.Consumer>
	);
};

export default Student;
