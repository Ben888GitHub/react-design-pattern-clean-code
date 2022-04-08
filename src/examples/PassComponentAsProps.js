const CircleIcon = () => (
	<svg height="100" width="100">
		<circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" />
	</svg>
);

const ComponentThatAcceptsAnIcon = ({ IconComponent }) => (
	<div>
		<p>Below is the icon component prop I was given:</p>
		<IconComponent />
	</div>
);

function PassComponentAsProps() {
	return (
		//   Good Example
		<ComponentThatAcceptsAnIcon IconComponent={CircleIcon} />
		//
		// Bad Example
		//  <ComponentThatAcceptsAnIcon IconComponent={() => <CircleIcon />} />
	);
}

export default PassComponentAsProps;
