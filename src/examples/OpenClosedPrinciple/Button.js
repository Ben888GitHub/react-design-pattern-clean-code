function Button(props) {
	const { text, role, icon } = props;
	// todo, Open Closed Principle traits show no Conditional Changing in the component, but instead being used in Parent Component to receive Props
	return (
		<button {...props}>
			{text}
			<div>
				{/* {role === "forward" && "Right Arrow"}
            {role === "back" && "Left Arrow"} */}
				{icon}
			</div>
		</button>
	);
}

export default Button;
