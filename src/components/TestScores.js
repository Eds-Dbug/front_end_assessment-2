import React from 'react';
import '../css/style.css';

/**
 * @param {Array} grades - A array of test scores from the student.
 * @returns A rendered list of the students grades.
 */
const TestScores = ({ grades }) => {
	let count = 0;
	const renderlist = grades.map((score) => {
		count++;
		return <li className="field">{`Test ${count}: ${score}%`}</li>;
	});
	return <div className="scoreList mt-3 mb-1">{renderlist}</div>;
};

export default TestScores;
