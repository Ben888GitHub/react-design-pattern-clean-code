import React from 'react';

function Sample({ name, age, role }) {
	return (
		<>
			<h5>{name}</h5>
			<p>{age}</p>
			<p>{role}</p>
		</>
	);
}

export default Sample;
