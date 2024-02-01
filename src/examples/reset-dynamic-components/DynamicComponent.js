import { useState } from 'react';
import Counter from './Counter';
import Counter2 from './Counter2';

const DynamicComponent = () => {
	const [isKyle, setIsKyle] = useState(true);

	const [isMax, setIsMax] = useState(true);

	console.log('rerender');

	return (
		<div>
			{/* this won't switch to the newly reset state */}
			{/* {isKyle ?  <Counter name="Kyle" /> : <Counter name="Sally" />} */}

			{/* this do switch to newly reset state, but it will also reset the state on the eformer component */}
			{/* {isKyle ? (
				<div>
					<Counter name="Kyle" />
				</div>
			) : (
				<section>
					{' '}
					<Counter name="Sally" />{' '}
				</section>
			)} */}

			{/* Key works well */}
			{isKyle ? (
				<Counter name="Kyle" key="Kyle" />
			) : (
				<Counter name="Sally" key="Sally" />
			)}

			<br />
			<button onClick={() => setIsKyle((k) => !k)}>Swap</button>

			<br />
			<br />
			{isMax ? <Counter2 name="Max" /> : <Counter2 name="May" />}
			<br />
			<button onClick={() => setIsMax((m) => !m)}>Swap</button>
		</div>
	);
};

export default DynamicComponent;

// References
// https://www.youtube.com/watch?v=vXJkeZf-4-4
