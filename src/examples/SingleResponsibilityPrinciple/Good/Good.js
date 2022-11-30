// todo, good example: use these Components under Good component
import Filter from './Filter';
import useProducts from './hooks/useProducts';
import Products from './Products';

function Good() {
	const { products } = useProducts();

	return (
		<div>
			<Filter filterRate={filterRate} handleRating={handleRating} />
		</div>
	);
}

export default Good;
