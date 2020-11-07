
import React, { useEffect, useState } from 'react';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer'
import axios from '../axios'
import './RowComponent.css'
const base_url = 'https://image.tmdb.org/t/p/original'
function RowComponenet({ title, fetchUrl, isLargeRow }) {
    const [movies, setMovies] = useState([])
    const [trailerUrl, setTrailerUrl] = useState("")
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl)
            setMovies(request.data.results);
        }
        fetchData()
    }, [])
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
            autoplay: 1
        }
    }
    const handleClick = (movie) => {
        if (trailerUrl) {
            setTrailerUrl('')
        } else {
            movieTrailer(movie?.name || "")
                .then((url) => {
                    const urlParams = new URLSearchParams(new URL(url).search)
                    setTrailerUrl(urlParams.get('v'))
                })
                .catch(error => console.log(error))
        }
    }
    return (
        < div className='row' >
            <h2>{title}</h2>
            <div className='posters'>
                {
                    movies.map(movie => (
                        <img className={`posterRow ${isLargeRow && 'posterLarge'}`}
                            onClick={() => handleClick(movie)}
                            key={movie.id}
                            src={`${base_url}${isLargeRow ? movie?.poster_path : movie?.backdrop_path}`} alt={movie?.title} />
                    ))
                }
            </div>
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
        </div >
    );
}

export default RowComponenet;