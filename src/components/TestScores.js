import React from 'react';
import '../css/style.css';
import StudentContex from '../context/StudentContex';

/**
 * Display the test scores for each student
 */
const TestScores = ({ grades }) => {
	let count = 0;
	const renderlist = grades.map((score) => {
		count++;
		return <li className="field">{`Test ${count}: ${score}%`}</li>;
	});

	return <div className="scoreList">{renderlist}</div>;
};

export default TestScores;
