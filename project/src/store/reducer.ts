import { createReducer } from '@reduxjs/toolkit';
import { FilmsOnPage } from '../const';
import { Film, Films } from '../types/films';
import { setFilms, changeGenre, addFilms, resetMaxFilms, setError, setPromoFilm } from './action';

type InitialState = {
  genre: string,
  films: Films,
  favoriteFilms: Films,
  promoFilm: Film | object,
  maxFilms: number,
  error: string,
  isDataLoaded: boolean,
};

const initialState: InitialState = {
  genre: 'All genres',
  films: [],
  favoriteFilms: [],
  promoFilm: {},
  maxFilms: +FilmsOnPage.Initial,
  error: '',
  isDataLoaded: false,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.genre = action.payload;
    })
    .addCase(setFilms, (state, action) => {
      state.films  = action.payload;
      state.isDataLoaded = true;
    })
    .addCase(setPromoFilm,  (state, action) => {
      state.promoFilm = action.payload;
    })
    .addCase(addFilms, (state) => {
      state.maxFilms += +FilmsOnPage.MaxPerStep;
    })
    .addCase(resetMaxFilms, (state) => {
      state.maxFilms = +FilmsOnPage.Initial;
    })
    .addCase(setError, (state, action)=> {
      state.error = action.payload;
    });
});

export {reducer};
