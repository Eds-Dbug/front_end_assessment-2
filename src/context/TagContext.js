import React, { useState } from 'react';

const Context = React.createContext('');

export const TagStore = (props) => {
	const [tags, setTags] = useState([]);

	const onChangeSetTags = (data) => {
		setTags([...tags, data]);
	};

	return (
		<Context.Provider value={{ tags, onChangeSetTags }}>
			{props.children}
		</Context.Provider>
	);
};

export default Context;
