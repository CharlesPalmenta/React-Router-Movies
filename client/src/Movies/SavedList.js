import React from 'react';
import { useHistory } from 'react-router-dom';

function SavedList(props) {
  console.log(props);
  const history = useHistory();
  const returnHome = () => {
    history.push('/')
  }
  console.log(history);
  return (
  <div className="saved-list">
    <h3>Saved Movies:</h3>
    {props.list.map(movie => (
      <span className="saved-movie">{movie.title}</span>
    ))}
    <div onClick = {returnHome} className="home-button">Home</div>
  </div>
);
}

export default SavedList;
