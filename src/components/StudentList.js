import { Student } from './Student';
import StudentContex from '../context/StudentContex';
import SearchContex from '../context/SearchContext';
import { TagStore } from '../context/TagContext';

/**
 *
 * @returns A rendered list of students
 */
export const StudentList = () => {
	/**
	 *
	 * @param {Array} value
	 * @param {Object} term - the search terms for both name and tag.
	 * @param {String} term.searchTerm - the search input for first and last names
	 * @param {String} term.searchTerm - the search input for tags
	 * @returns A element consisting of image, firstName, lastName, email, company, skill and  grades of the student
	 */
	const renderList = (value, { nameSearchTerm, searchTagTerm }) => {
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
							<Student
								studentInfo={studentInfo}
								nameSearchTerm={nameSearchTerm}
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
