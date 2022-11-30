// one Entity should depend upon abstractions not concretions
// turn React Component to Standalone Component, allow it to extend and reuse

import ConnectedForm from './connectedForm';

// it's more like separate function from the Child Component, and pass down the function as props from Parent Component

function DIP() {
	return <ConnectedForm />;
}

export default DIP;
