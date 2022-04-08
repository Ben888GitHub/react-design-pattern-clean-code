const Greeting = ({ personName }) => <p>Hi, {personName}!</p>;

// NOTE, this is Bad Example when passing String as Props
const BadExampleOfStringProps = () => (
	<>
		<Greeting personName={'John'} />
		<Greeting personName={'Matt'} />
		<Greeting personName={`Paul`} />
	</>
);

function StringProps() {
	return (
		<>
			<Greeting personName="John" />
			<Greeting personName="Matt" />
			<Greeting personName="Paul" />
		</>
	);
}

export default StringProps;
