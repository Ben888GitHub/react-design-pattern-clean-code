const HungryMessage = ({ isHungry }) => (
	<span>{isHungry ? 'I am hungry' : 'I am full'}</span>
);

// NOTE, this is Bad Example when passing Booleans as Props
function BadExampleOfBooleanProps() {
	<>
		<span>
			<b>This person is hungry: </b>
		</span>
		<HungryMessage isHungry={true} />
		<br />
		<span>
			<b>This person is full: </b>
		</span>
		<HungryMessage isHungry={false} />
	</>;
}
function BooleanProps() {
	return (
		<>
			<span>
				<b>This person is hungry: </b>
			</span>
			<HungryMessage isHungry />
			<br />
			<span>
				<b>This person is full: </b>
			</span>
			<HungryMessage isHungry={false} />
		</>
	);
}

export default BooleanProps;
