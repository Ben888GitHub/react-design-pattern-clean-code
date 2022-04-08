// import movies data
import { movies } from './movies';
import { useState, useEffect } from 'react';
import './movies.css';
import Movie from './Movie';

// fetchMovies() pretends to get the movie data from a store
const fetchMovies = () => {
	return movies;
};

function MovieContainer() {
	const [movies, setMovies] = useState([]);

	useEffect(() => {
		// Here we can actually change the method logic to fetch it from Actual API
		const movies = fetchMovies();
		setMovies(movies);
	}, []);

	// console.log(fetchMovies());

	return (
		<div className="movie-container">
			<h2>Movie Container</h2>
			<ul className="movie-list">
				{movies.map((movie) => (
					<Movie movie={movie} key={movie.id} />
				))}
			</ul>
		</div>
	);
}

export default MovieContainer;
