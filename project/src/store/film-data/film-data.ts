import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { FilmData } from '../../types/state';

const initialState: FilmData = {
  films: [],
  filmsLikeThis: [],
  filmReviews: [],
  favoriteFilms: [],
  promoFilm: {},
  currentFilm: {},
  isDataLoaded: false,
  isReviewSending: false,
};

export const filmData = createSlice({
  name: NameSpace.data,
  initialState,
  reducers: {
    loadFilms: (state, action) => {
      state.films = action.payload;
      state.isDataLoaded = true;
    },
    loadFilmsLikeThis: (state, action) => {
      state.filmsLikeThis = action.payload;
    },
    loadPromoFilm: (state, action) => {
      state.promoFilm = action.payload;
    },
    loadCurrentFilm: (state, action) => {
      state.currentFilm = action.payload;
    },
    loadFilmReviews: (state, action) => {
      state.filmReviews = action.payload;
    },
    sendReview: (state, action) => {
      state.isReviewSending = action.payload;
    },
    setFavoriteFilms: (state, action) => {
      state.favoriteFilms = action.payload;
    },
    setFilmStatus: (state, action) => {
      // state.films[action.payload].isFavorite = !state.films[action.payload].isFavorite;
      // state.currentFilm.isFavorite = action.payload;
    },
  },
});

export const {
  loadFilms,
  loadFilmsLikeThis,
  loadCurrentFilm,
  loadFilmReviews,
  loadPromoFilm,
  sendReview,
  setFavoriteFilms,
  setFilmStatus,
} = filmData.actions;
