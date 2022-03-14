import { AuthorizationStatus } from '../const';
import { store } from '../store';
import { Film, Films } from './films';
import { Reviews } from './reviews';

export type UserProcess = {
  authorizationStatus: AuthorizationStatus
}

export type FilmData = {
  films: Films,
  filmsLikeThis: Films,
  filmReviews: Reviews,
  favoriteFilms: Films,
  promoFilm: Film | object,
  currentFilm: Film | object,
  isDataLoaded: boolean,
  isReviewSending: boolean,
}

export type FilmProcess = {
  genre: string,
  maxFilms: number,
}

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
