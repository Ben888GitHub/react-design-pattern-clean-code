import { useState } from 'react';

function OneConditionalRendering() {
	const [showConditionalText, setShowConditionalText] = useState(false);

	const handleClick = () => setShowConditionalText(!showConditionalText);

	return (
		<>
			<button onClick={handleClick}>Toggle The Text</button>
			{showConditionalText && <div>The condition must be true!</div>}
		</>
	);
}

export default OneConditionalRendering;

// Don't use Ternary Operator if you're rendering only One Condition
// {
// 	showConditionalText ? <p>The condition must be true!</p> : null;
// }
