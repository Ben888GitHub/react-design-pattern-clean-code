import { useState, Fragment } from 'react';

function FragmentOverDiv() {
	const [people, setPeople] = useState([
		{
			name: 'Brad',
			age: 32
		},
		{
			name: 'Mike',
			age: 23
		}
	]);

	return (
		<>
			<h2>
				Use React.fragment instead of Html element like div, span, etc when you
				won't use the key property OR don't wanna style the items.
			</h2>
			{people.map((person, idx) => (
				<Fragment key={idx}>
					<p>{person.name}</p>
					<p>{person.age}</p>
				</Fragment>
			))}
		</>
	);
}

export default FragmentOverDiv;

// Don't use this instead
{
	/* <container>
	{people.map((item, idx) => (
		<div key={idx}>
			<p>{person.name}</p>
			<p>{person.age}</p>
			<br />
		</div>
	))}
</container>; */
}
