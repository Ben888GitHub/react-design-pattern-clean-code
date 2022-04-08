import { lazy, Suspense } from 'react';
const Home = lazy(() => import('./Home'));
const About = lazy(() => import('./About'));
function CodeSplitting() {
	return (
		<Suspense fallback={<div>Loading...</div>}>
			{/* <Route path="/home" component={Home} />
    <Route path="/about" component={About} /> */}
		</Suspense>
	);
}

export default CodeSplitting;
