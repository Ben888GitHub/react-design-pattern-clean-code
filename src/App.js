import './App.css';

import {
	FunctionOutsideJsx,
	ObjectState,
	JsxShorthand,
	DestructureMultipleProps,
	FragmentOverDiv,
	MovieContainer,
	TernaryOperator,
	OneConditionalRendering,
	HandleMultipleInputs
} from './examples/index';
import DynamicComponent from './examples/reset-dynamic-components/DynamicComponent';

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
			<br />
			<HandleMultipleInputs />
			<br />
			<DynamicComponent />
			<br />
		</div>
	);
}

export default App;
