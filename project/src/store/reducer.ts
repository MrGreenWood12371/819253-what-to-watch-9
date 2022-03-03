import { createReducer } from '@reduxjs/toolkit';
import { films } from '../mocks/films';
import { setFilms, changeGenre } from './action';

const initialState = {
  genre: 'All genres',
  films: films,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      const genre = action.payload;
      state.genre = genre;
    })
    .addCase(setFilms, (state, action) => {
      state.films  = action.payload;
    });
});

export {reducer};
