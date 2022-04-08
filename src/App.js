import logo from './logo.svg';
import './App.css';

import {
	FunctionOutsideJsx,
	ObjectState,
	JsxShorthand,
	DestructureMultipleProps,
	FragmentOverDiv,
	MovieContainer,
	TernaryOperator,
	OneConditionalRendering
} from './examples/index';
function App() {
	return (
		<div className="App">
			<h1>React Design Pattern and Clean Code</h1>
			<FunctionOutsideJsx />
			<br />
			<ObjectState />
			<br />
			<JsxShorthand />
			<br />
			<DestructureMultipleProps />
			<br />
			<FragmentOverDiv />
			<br />
			<MovieContainer />
			<br />
			<TernaryOperator />
			<br />
			<OneConditionalRendering />
		</div>
	);
}

export default App;
