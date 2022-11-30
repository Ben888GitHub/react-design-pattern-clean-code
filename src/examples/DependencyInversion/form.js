import { useState } from 'react';

function Form(props) {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const { onSubmit } = props;

	// good
	const handleSubmit2 = async (e) => {
		e.preventDefault();

		onSubmit(email, password);
	};

	return <div>Form</div>;
}

export default Form;
