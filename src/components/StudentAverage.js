import React from 'react';
import StudentContex from '../context/StudentContex';

const StudentAverage = ({ grades }) => {
	//console.log(grades);
	/**
	 *
	 * @param {array} grades
	 * @returns The student Average
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

	return <li className="field">{`Average: ${average(grades)}%`}</li>;
};

export default StudentAverage;
