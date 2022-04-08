import { memo } from 'react';

function MemoAvoidRerender() {
	return (
		<>
			<h1>Memo Example to avoid rerender</h1>
			<h1>Refer to useCallback()</h1>
		</>
		//     <ui>
		//     {items.map((item) => (
		//       <MemoComponent>{item}</MemoComponent>
		//     ))}
		//   </ui>
	);
}

export default memo(MemoAvoidRerender);
