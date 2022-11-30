import React from 'react';
import Form from './form';

function ConnectedForm() {
	const handleSubmit = async (email, password) => {
		console.log(email, password);
		// todo..., write API Here to authenticate user
	};

	return <Form onSubmit={handleSubmit} />;
}

export default ConnectedForm;
