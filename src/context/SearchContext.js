import React, { useState } from 'react';

const Context = React.createContext('');

export const SearchStore = (props) => {
	const [searchTerm, setSearchTerm] = useState('');

	const onChangeSearchTerm = (searchTerm) => {
		setSearchTerm(searchTerm);
	};

	return (
		<Context.Provider value={{ searchTerm, onChangeSearchTerm }}>
			{props.children}
		</Context.Provider>
	);
};

export default Context;
