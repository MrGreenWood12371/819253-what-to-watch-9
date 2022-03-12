import { createAction } from '@reduxjs/toolkit';
import { AppRoute, AuthorizationStatus } from '../const';
import { Film, Films } from '../types/films';
import { Reviews } from '../types/reviews';

export const changeGenre = createAction<string>('film/changeGenre');
export const addFilms = createAction('film/addFilms');
export const loadCurrentFilm = createAction<Film>('film/loadCurrentFilm');
export const loadFilmsLikeThis = createAction<Films>('film/loadFilmsLikeThis');
export const loadFilmReviews = createAction<Reviews>('film/loadFilmReviews');
export const resetMaxFilms = createAction('film/resetMaxFilms');
export const setFilms = createAction<Films>('data/setFilms');
export const setPromoFilm = createAction<Film>('data/setPromoFilm');
export const setError = createAction<string>('data/setError');
export const sendReview = createAction<boolean>('data/sendReview');
export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');
export const redirectToRoute = createAction<AppRoute | string>('film/redirectToRoute');
