import Thumbnail from './thumbnail';

function Product(props) {
	const { product } = props;

	const { id, title, price, rating, image } = product;

	return (
		<div>
			{/* bad */}
			{/* <Thumbnail product={product} /> */}

			{/* good */}
			<Thumbnail image={image} />
		</div>
	);
}

export default Product;
