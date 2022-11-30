import { useMemo } from 'react';

function Filter(props) {
	const { filterRate, handleRating } = props;

	// const filteredProducts = useMemo(
	// 	() => products.filter((product) => product.rating.rate > filterRate),
	// 	[products, filterRate]
	// );

	return <div>Filter</div>;
}

export default Filter;
