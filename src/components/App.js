import React from 'react';
import StudentList from './StudentList';
import '../css/style.css';
import { StudentStore } from '../context/StudentContex';
import { SearchStore } from '../context/SearchContext';
import SearchBar from './SearchBar';

const App = () => {
	return (
		<div>
			<SearchStore>
				<SearchBar />
				<StudentStore>
					<StudentList className="StudentList" />
				</StudentStore>
			</SearchStore>
		</div>
	);
};

export default App;
