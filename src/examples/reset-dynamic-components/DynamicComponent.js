import { useState } from 'react';
import Counter from './Counter';

const DynamicComponent = () => {
	const [isKyle, setIsKyle] = useState(true);

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
		</div>
	);
};

export default DynamicComponent;

// References
// https://www.youtube.com/watch?v=vXJkeZf-4-4
