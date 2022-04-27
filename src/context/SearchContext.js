import React, { useState } from 'react';

const Context = React.createContext('');

/**
 * Stores information relevant to searches
 */
export const SearchStore = (props) => {
	const [nameSearchTerm, setSearchTerm] = useState('');
	const [searchTagTerm, setSearchTagTerm] = useState('');

	const onChangeSearchTerm = (nameSearchTerm) => {
		setSearchTerm(nameSearchTerm);
	};

	const onChangeSearchtagTerm = (searchTagTerm) => {
		setSearchTagTerm(searchTagTerm);
	};

	return (
		<Context.Provider
			value={{
				nameSearchTerm,
				onChangeSearchTerm,
				searchTagTerm,
				onChangeSearchtagTerm,
			}}
		>
			{props.children}
		</Context.Provider>
	);
};

export default Context;
