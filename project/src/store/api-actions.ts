import { createAsyncThunk } from '@reduxjs/toolkit';
import { api, store } from '.';
import { Server } from '../const';
import { errorHandle } from '../services/error-handle';
import { Film, Films } from '../types/films';
import { setError, setFilms, setPromoFilm } from './action';

export const clearErrorAction = createAsyncThunk(
  'data/clearError',
  () => {
    setTimeout(
      () => store.dispatch(setError('')),
      +Server.ErrorTimeout,
    );
  },
);

export const fetchFilmsAction = createAsyncThunk(
  'data/fetchFilms',
  async () =>  {
    try {
      const  {data} = await api.get<Films>(Server.Films);
      store.dispatch(setFilms(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const fetchPromoFilmAction = createAsyncThunk(
  'data/fetchPromoFilm',
  async () =>  {
    try {
      const  {data} = await api.get<Film>(Server.PromoFilm);
      store.dispatch(setPromoFilm(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);
