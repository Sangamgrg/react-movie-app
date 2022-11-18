import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from './Components/MovieList';
import MovieListHeading from './MovieListHeading';

const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchValue, setSearchValue]=useState('');

    const getMovieRequest=async()=>{
        const url='http://www.omdbapi.com/?i=tt3896198&apikey=d8bf507b';

        const response= await fetch(url);
        const responseJson= await response.json();

        console.log(responseJson);
        setMovies(responseJson.Search);
    };

    useEffect(()=>{
        getMovieRequest();
    },[]);

    return (
        <div className='container-fluid movie-app'>
            <div className='row'>
                <MovieListHeading heading={movies}/>
            </div>
            <div className='row'>
                <MovieList movies={movies} />
            </div>
        </div>
    );
};

export default App;
