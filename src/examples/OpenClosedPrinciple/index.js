import Button from './Button';

function OpenClosedPrinciple() {
	return (
		<div>
			<Button
				text="Go Home"
				// role="forward"
				icon="Right Arrow"
			/>
			<Button
				text="Go Back"
				// role="back"
				icon="Left Arrow"
			/>
		</div>
	);
}

export default OpenClosedPrinciple;
