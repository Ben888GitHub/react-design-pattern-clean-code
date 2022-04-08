import { useState } from 'react';

function TernaryOperator() {
	const [isLoading, setIsLoading] = useState(true);

	// if (isLoading) {
	//     return <div>Loading...</div>;
	// }
	// else {
	//     return
	// }

	return (
		<div>{isLoading ? <div>Loading...</div> : <div>Hello World</div>}</div>
	);
}

export default TernaryOperator;
