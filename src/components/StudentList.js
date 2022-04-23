import React, { useState } from 'react';
import StudentItem from './StudentItem';
import StudentContex from '../context/StudentContex';
import SearchContex from '../context/SearchContext';
import { TagStore } from '../context/TagContext';

const StudentList = (term) => {
	const [showTag, setShowTag] = useState(true);
	// const [tagData, setTagData] = useState(['']);

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
		// .filter((val) => {
		// 	return (
		// 		val.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
		// 		val.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
		// 		!searchTerm
		// 	);
		// })
		return value.map(
			({ pic, firstName, lastName, email, company, skill, grades }) => {
				const studentInfo = {
					pic,
					firstName,
					lastName,
					email,
					company,
					skill,
					grades,
				};

				return (
					<div>
						<TagStore>
							<StudentItem
								studentInfo={studentInfo}
								searchTerm={searchTerm}
								searchTagTerm={searchTagTerm}
							/>
						</TagStore>
					</div>
				);
			}
		);
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

export default StudentList;
