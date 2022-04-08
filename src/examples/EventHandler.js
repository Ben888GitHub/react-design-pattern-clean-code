import { useState } from 'react';

function EventHandler() {
	const [inputValue, setInputValue] = useState('');

	const handleChange = (e) => {
		setInputValue(e.target.value);
	};

	return (
		<>
			<label htmlFor="name">Name: </label>

			{/* Good Example */}
			<input id="name" value={inputValue} onChange={handleChange} />

			{/* Bad Example */}
			{/* <input id="name" value={inputValue} onChange={e => handleChange(e)} /> */}
		</>
	);
}

export default EventHandler;
