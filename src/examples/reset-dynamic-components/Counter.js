// import { useState } from 'react';
import useLocalStorageState from 'use-local-storage-state';

const Counter = ({ name }) => {
	// * you can dynamically persist this with localStorage based on the name as key
	// const [count, setCount] = useState(0);
	const [count, setCount] = useLocalStorageState(name, { defaultValue: 0 });

	const chatKey = name === 'Kyle' ? 'kyleChat' : 'sallyChat';

	const [chatMessage, setChatMessage] = useLocalStorageState(chatKey, {
		defaultValue: ''
	});
	console.log('rerender');

	return (
		<div>
			<div>{name}</div>
			<button onClick={() => setCount((c) => c - 1)}>-</button>
			{count}
			<button onClick={() => setCount((c) => c + 1)}>+</button>
			<br />
			<br />
			{/* you can apply key to input when it comes to Chat Room Input */}
			<input
				type="text"
				key={chatKey}
				placeholder="Type chat..."
				value={chatMessage}
				onChange={(e) => setChatMessage(e.target.value)}
			/>
		</div>
	);
};

export default Counter;
