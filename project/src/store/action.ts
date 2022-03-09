import { createAction } from '@reduxjs/toolkit';
import { Film, Films } from '../types/films';

export const changeGenre = createAction<string>('film/changeGenre');
export const setFilms = createAction<Films>('data/setFilms');
export const setPromoFilm = createAction<Film>('data/setPromoFilm');
export const addFilms = createAction('film/addFilms');
export const resetMaxFilms = createAction('film/resetMaxFilms');
export const setError = createAction<string>('data/setError');
