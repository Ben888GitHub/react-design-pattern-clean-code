import { useState } from 'react';

function HandleMultipleInputs() {
	const [user, setUser] = useState({
		name: '',
		email: '',
		age: ''
	});

	const handleChange = (e) => {
		setUser({ ...user, [e.target.name]: e.target.value });
	};

	return (
		<div>
			<input type="text" name="name" onChange={handleChange} />
			<input type="text" name="email" onChange={handleChange} />
			<input type="number" name="age" onChange={handleChange} />
			<button onClick={() => console.log(user)}>Log on the console</button>
		</div>
	);
}

export default HandleMultipleInputs;
