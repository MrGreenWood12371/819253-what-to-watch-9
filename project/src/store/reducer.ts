import { createReducer } from '@reduxjs/toolkit';
import { FilmsOnPage } from '../const';
import { films } from '../mocks/films';
import { setFilms, changeGenre, addFilms, resetMaxFilms } from './action';

const initialState = {
  genre: 'All genres',
  films: films,
  maxFilms: +FilmsOnPage.Initial,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.genre = action.payload;
    })
    .addCase(setFilms, (state, action) => {
      state.films  = action.payload;
    })
    .addCase(addFilms, (state) => {
      state.maxFilms += +FilmsOnPage.MaxPerStep;
    })
    .addCase(resetMaxFilms, (state) => {
      state.maxFilms = +FilmsOnPage.Initial;
    });
});

export {reducer};
