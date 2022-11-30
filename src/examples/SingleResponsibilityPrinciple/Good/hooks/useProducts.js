import { useState, useEffect } from 'react';

export default async function useProducts() {
	const [products, setProducts] = useState([]);

	const fetchProducts = async () => {
		const res = await fetch('http://fakestoreapi.com/products').then(
			(r) => r.json
		);

		if (res && res.data) setProducts(res.data);
	};

	useEffect(() => {
		fetchProducts();
	}, []);

	return { products };
}
