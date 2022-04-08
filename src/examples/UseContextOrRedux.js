import React from 'react';

function UseContextOrRedux() {
	return (
		<div>
			<Provider store={store}>
				<Router>
					<Route path="/" element={<App />} />
					<Route path="/home" element={<Home />} />
				</Router>
			</Provider>
		</div>
	);
}

// Inside child component
const { auth } = useContext(AuthContext); // For context
const { auth } = useSelector((state) => state.auth); // For redux

export default UseContextOrRedux;
