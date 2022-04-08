import { useState, lazy, Suspense } from 'react';

const Sample = lazy(() => import('../Sample'));

function DestructureMultipleProps() {
	const [people, setPeople] = useState({
		name: 'John',
		age: 30,
		role: 'admin'
	});

	return (
		<Suspense fallback={<p>Loading...</p>}>
			<Sample {...people} />
		</Suspense>
	);
}

export default DestructureMultipleProps;
