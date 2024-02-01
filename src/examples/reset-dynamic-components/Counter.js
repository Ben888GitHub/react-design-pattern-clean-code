// import { useState } from 'react';
import useLocalStorageState from 'use-local-storage-state';

const Counter = ({ name }) => {
	// * you can dynamically persist this with localStorage based on the name as key
	const chatKey = name === 'Kyle' ? 'kyleChat' : 'sallyChat';

	// const [count, setCount] = useState(0);
	const [count, setCount] = useLocalStorageState(name, { defaultValue: 0 });

	const [chatMessage, setChatMessage] = useLocalStorageState(chatKey, {
		defaultValue: ''
	});
	console.log('rerender');

	return (
		<div>
			<div>{name}</div>

			{/* set the count value to localstorage based on the key which is name */}
			<button onClick={() => setCount((c) => c - 1)}>-</button>
			{count}
			<button onClick={() => setCount((c) => c + 1)}>+</button>

			<br />
			<br />
			{/* you can apply key to input when it comes to Chat Room Input */}
			{/* set the chatMessage value to localstorage based on the chatKey which is name */}
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
