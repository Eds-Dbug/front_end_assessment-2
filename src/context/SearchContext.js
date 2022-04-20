import React, { useState } from 'react';

const Context = React.createContext('');

export const SearchStore = (props) => {
	const [searchTerm, setSearchTerm] = useState('');
	const [searchTagTerm, setSearchTagTerm] = useState('');

	const onChangeSearchTerm = (searchTerm) => {
		setSearchTerm(searchTerm);
	};

	const onChangeSearchtagTerm = (searchTagTerm) => {
		setSearchTagTerm(searchTagTerm);
	};

	return (
		<Context.Provider
			value={{
				searchTerm,
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
