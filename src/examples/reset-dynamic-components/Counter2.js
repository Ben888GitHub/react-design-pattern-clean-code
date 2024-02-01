import useLocalStorageState from 'use-local-storage-state';

const Counter2 = ({ name }) => {
	const [chatData, setChatData] = useLocalStorageState(name, {
		defaultValue: {
			message: '',
			count: 0
		}
	});

	// function to dynamically update key and value of LocalStorage state
	const handleUpdateChat = (key, value) => {
		setChatData((prevChat) => {
			if (key === 'message') {
				return {
					...prevChat,
					message: value
				};
			} else {
				return {
					...prevChat,
					count: value === 'increment' ? prevChat.count + 1 : prevChat.count - 1
				};
			}
		});
	};

	return (
		<div>
			<div>{name}</div>

			<button
				onClick={() =>
					// setChatData((chatData) => ({
					// 	...chatData,
					// 	count: chatData.count - 1
					// }))
					handleUpdateChat('count', 'decrement')
				}
			>
				-
			</button>
			{chatData.count}
			<button
				onClick={() =>
					// setChatData((chatData) => ({
					// 	...chatData,
					// 	count: chatData.count + 1
					// }))
					handleUpdateChat('count', 'increment')
				}
			>
				+
			</button>

			<br />
			<br />
			{/* you can apply key to input when it comes to Chat Room Input */}
			{/* set the chatMessage value to localstorage based on the chatKey which is name */}
			<input
				type="text"
				key={name}
				placeholder="Type chat..."
				value={chatData.message}
				onChange={(e) =>
					// setChatData((chatData) => ({
					// 	...chatData,
					// 	message: e.target.value
					// }))
					handleUpdateChat('message', e.target.value)
				}
			/>
		</div>
	);
};

export default Counter2;
