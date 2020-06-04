import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';

import SavedList from './Movies/SavedList';

const App = () => {
  const [savedList, setSavedList] = useState([]);
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const getMovies = props => {
      axios
        .get('http://localhost:5000/api/movies')
        .then(response => {
          setMovieList(response.data);
          console.log('this is the setMovieList', response.data);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    getMovies();
  }, []);

  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };

  return (
    <div>
      <SavedList list={savedList} />
      <div>
        <Route path='/movies/:id'><Movie movies={movieList} addToSavedList={addToSavedList} /></Route>
        <Route exact path='/'><MovieList movies={movieList}/></Route>
      </div>
    </div>
  );
};

export default App;
