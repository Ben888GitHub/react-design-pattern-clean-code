import useLocalStorageState from 'use-local-storage-state';

const Counter2 = ({ name }) => {
	const [chatData, setChatData] = useLocalStorageState(name, {
		defaultValue: {
			message: '',
			count: 0
		}
	});

	return (
		<div>
			<div>{name}</div>

			<button
				onClick={() =>
					setChatData((chatData) => ({
						...chatData,
						count: chatData.count - 1
					}))
				}
			>
				-
			</button>
			{chatData.count}
			<button
				onClick={() =>
					setChatData((chatData) => ({
						...chatData,
						count: chatData.count + 1
					}))
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
					setChatData((chatData) => ({
						...chatData,
						message: e.target.value
					}))
				}
			/>
		</div>
	);
};

export default Counter2;
