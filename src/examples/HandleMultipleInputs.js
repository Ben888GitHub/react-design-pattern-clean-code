import { useState } from 'react';

const initialUser = {
	name: '',
	email: '',
	age: ''
};

function HandleMultipleInputs() {
	const [user, setUser] = useState(initialUser);

	const handleChange = (e) => {
		// So-so Code
		// setUser({ ...user, [e.target.name]: e.target.value });

		// Best Practice Code
		setUser((currentUser) => ({
			...currentUser,
			[e.target.name]: e.target.value
		}));
	};

	return (
		<div>
			<input
				type="text"
				name="name"
				value={user.name}
				onChange={handleChange}
			/>
			<input
				type="text"
				name="email"
				value={user.email}
				onChange={handleChange}
			/>
			<input
				type="number"
				name="age"
				value={user.age}
				onChange={handleChange}
			/>
			<button
				onClick={() => {
					console.log(user);
					setUser({ ...initialUser });
				}}
			>
				Log on the console
			</button>
		</div>
	);
}

export default HandleMultipleInputs;
