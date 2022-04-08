import { useState, lazy } from 'react';

const Admin = 'admin';
const User = 'user';
const NotFound = 'notfound';

function ObjectOverSwitchStatement() {
	// Bad Code
	// switch (props.type) {
	//     case "ADMIN":
	//       return <Admin />;
	//     case "USER":
	//       return <User />;
	//     default:
	//       return <NotFound />;
	//   }

	// Good Code
	const componentMap = {
		ADMIN: Admin,
		USER: User,
		NOT_FOUND: NotFound
	};

	// Better Code
	const componentMapDynamic = {
		ADMIN: lazy(() => import('./Admin')),
		USER: lazy(() => import('./User')),
		NOT_FOUND: lazy(() => import('./NotFound'))
	};

	// const Component = componentMap[props.type]

	return <div>ObjectOverSwitchStatement</div>;
}

export default ObjectOverSwitchStatement;
