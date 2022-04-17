import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Context = React.createContext();

/**
 *
 * @param {child} props
 * @returns A list of Students
 */
export const StudentStore = (props) => {
	const [student, setStudent] = useState([]);

	useEffect(() => {
		search();
	}, []);

	/**
	 * function will grab all the student data
	 */
	const search = async () => {
		const response = await axios.get(
			'https://api.hatchways.io/assessment/students'
		);
		setStudent(response.data.students);
	};

	return (
		<Context.Provider value={{ student }}>{props.children}</Context.Provider>
	);
};

export default Context;
