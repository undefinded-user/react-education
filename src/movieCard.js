import React from 'react'


function movieCard({movie}){
	return (
		<div className="card">
			<img 
				className="card--img" 
				src={"https://image.tmdb.org/t/p/w185_and_h278_bestv2" + movie.backdrop_path}
				alt={movie.title + "poster"}
			/>
			<div className="card--content">
				<h3 className="card--title">{movie.title}</h3>
				<p><small>RESLEASE DATE: {movie.release_date}</small></p>
				<p><small>RAITING: {movie.vote_average}</small></p>
				<p className="card--des">{movie.overview}</p>
			</div>

		</div>
	)
}

export default movieCard