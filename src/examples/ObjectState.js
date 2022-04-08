import { useState } from 'react';

function ObjectState() {
	// So-so Code
	// const [count, setCount] = useState(0);
	// const [name, setName] = useState("");

	// Good Code as Object State to update multiple states together
	const [value, setValue] = useState({
		count: 0,
		randomNum: 0
	});

	const handleUpdateValue = () => {
		setValue({
			...value,
			randomNum: Math.random(),
			count: value.count + 1
		});
	};

	const handleClick = () => {
		setTimeout(handleUpdateValue, 1000);
	};

	console.log(`object state re-render`);
	return (
		<div>
			<h2>Using Object State</h2>
			<button onClick={handleClick}>Update Value with Object State</button>
			{value && (
				<>
					<h3>{value.count}</h3>
					<h3>{value.randomNum}</h3>
				</>
			)}
		</div>
	);
}

export default ObjectState;
