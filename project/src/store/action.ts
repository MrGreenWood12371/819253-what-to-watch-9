import { createAction } from '@reduxjs/toolkit';
import { Films } from '../types/films';

export const changeGenre = createAction<string>('film/changeGenre');
export const setFilms = createAction<Films>('film/setFilms');
export const addFilms = createAction('film/addFilms');
export const resetMaxFilms = createAction('film/resetMaxFilms');
