import { useState, useEffect, useMemo } from 'react';

function Bad() {
	const [products, setProducts] = useState([]);
	const [filterRate, setFilterRate] = useState(1);

	const fetchProducts = async () => {
		const res = await fetch('http://fakestoreapi.com/products').then(
			(r) => r.json
		);

		if (res && res.data) setProducts(res.data);
	};

	useEffect(() => {
		fetchProducts();
	}, []);

	const handleRating = (rate) => {
		setFilterRate(rate);
	};

	const filteredProducts = useMemo(
		() => products.filter((product) => product.rating.rate > filterRate),
		[products, filterRate]
	);

	return <div>Bad</div>;
}

export default Bad;
