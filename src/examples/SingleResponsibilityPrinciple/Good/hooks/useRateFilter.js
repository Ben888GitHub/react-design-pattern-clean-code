import { useState } from 'react';

export default function useRateFilter() {
	const [filterRate, setFilterRate] = useState(1);
	const handleRating = (rate) => {
		setFilterRate(rate);
	};

	return { handleRating, filterRate };
}
