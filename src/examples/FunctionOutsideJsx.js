import { useState } from 'react';

function FunctionOutsideJsx() {
	const [count, setCount] = useState(0);

	const increment = () => {
		setCount((currentCount) => currentCount + 1);
	};

	console.log('render func outside jsx');
	return (
		<div>
			<h2>Function Outside JSX</h2>
			<h3>{count}</h3>
			<button onClick={increment}>Increment</button>
		</div>
	);
}

export default FunctionOutsideJsx;
