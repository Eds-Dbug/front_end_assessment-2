import React from 'react';
import StudentList from './StudentList';
import '../css/style.css';
import { StudentStore } from '../context/StudentContex';
import { SearchStore } from '../context/SearchContext';
import { StudentSearchBar } from './StudentSearchBar';
import { TagSearchBar } from './TagSearchBar';

const App = () => {
	return (
		<div>
			<SearchStore>
				<div>
					<StudentSearchBar className="searchBar" />
					<TagSearchBar className="searchBar" />
				</div>

				<StudentStore>
					<StudentList className="StudentList" />
				</StudentStore>
			</SearchStore>
		</div>
	);
};

export default App;
