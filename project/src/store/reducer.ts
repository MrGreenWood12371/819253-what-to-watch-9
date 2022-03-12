import { createReducer } from '@reduxjs/toolkit';
import { AuthorizationStatus, FilmsOnPage } from '../const';
import { Film, Films } from '../types/films';
import { Reviews } from '../types/reviews';
import { setFilms, changeGenre, addFilms, resetMaxFilms, setError, setPromoFilm, requireAuthorization, loadCurrentFilm, loadFilmsLikeThis, loadFilmReviews, sendReview } from './action';

type InitialState = {
  genre: string,
  films: Films,
  filmsLikeThis: Films,
  filmReviews: Reviews,
  favoriteFilms: Films,
  promoFilm: Film | object,
  currentFilm: Film | object,
  maxFilms: number,
  error: string,
  isDataLoaded: boolean,
  isReviewSending: boolean,
  authorizationStatus: AuthorizationStatus,
};

const initialState: InitialState = {
  genre: 'All genres',
  films: [],
  filmsLikeThis: [],
  filmReviews: [],
  favoriteFilms: [],
  promoFilm: {},
  currentFilm: {},
  maxFilms: +FilmsOnPage.Initial,
  error: '',
  isDataLoaded: false,
  isReviewSending: false,
  authorizationStatus: AuthorizationStatus.Unknown,
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
    .addCase(loadCurrentFilm, (state, action) => {
      state.currentFilm = action.payload;
    })
    .addCase(loadFilmsLikeThis, (state, action) => {
      state.filmsLikeThis = action.payload;
    })
    .addCase(loadFilmReviews, (state, action) => {
      state.filmReviews = action.payload;
    })
    .addCase(addFilms, (state) => {
      state.maxFilms += +FilmsOnPage.MaxPerStep;
    })
    .addCase(resetMaxFilms, (state) => {
      state.maxFilms = +FilmsOnPage.Initial;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(sendReview, (state, action) => {
      state.isReviewSending = action.payload;
    });
});

export {reducer};
