import React, {useState} from 'react';
import MovieCard from './movieCard.js'

function SearchMovies(){

	const [inputQuery, setInputQuery] = useState('');
	const [moviesData, setMoviesData] = useState([]);
	const [isMovies, setIsMovies] = useState(true);



	function handleChange(event){
		const {value} = event.target;
		setInputQuery(value);

	}
 	


	function searchMovies(event){
		event.preventDefault();
		console.log("Submiting...");
		const url = `https://api.themoviedb.org/3/search/movie?api_key=ce61307582b64a2b9d75197377925f86&language=en-US&query=${inputQuery}`
		fetch(url).
		then(res => res.json()).
		then(data => {
			if(data.results.length){
				setMoviesData(data.results);
				setIsMovies(true)
			}else{
				setIsMovies(false)
			}
		}).
		catch(err => console.log(err))

	}

	return(
		<>			
			<form className="form" onSubmit={searchMovies}>
				<input 
						onChange={handleChange}
						value={inputQuery} type="text"
						className="input"
						name="query"
						placeholder="Enter movie name"
				/>
				<button className="button" type="submit">Search</button>
			</form>
			<div className="card-list">
				{!isMovies? <div className="no-content"><h1>Nothing was found, please try again!</h1></div> : <></>}
				{moviesData.filter(movie => movie.backdrop_path).map(movie => {
					return (
						<MovieCard movie = {movie} key = {movie.id} />
					)
				})}
			</div>
		</>
	)
}
export default SearchMovies 
