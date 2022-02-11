import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const MovieInfo = {
  title: 'The Grand Budapest Hotel',
  genre: 'Drama',
  startDate: '2014',
};

ReactDOM.render(
  <React.StrictMode>
    <App
      movieTitle={MovieInfo.title}
      movieGenre={MovieInfo.genre}
      startDate={MovieInfo.startDate}
    />
  </React.StrictMode>,
  document.getElementById('root'));
