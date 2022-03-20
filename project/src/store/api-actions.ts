import { createAsyncThunk } from '@reduxjs/toolkit';
import { api, store } from '.';
import { AppRoute, AuthorizationStatus, Server } from '../const';
import { errorHandle } from '../services/error-handle';
import { dropToken, saveToken } from '../services/token';
import { AuthData } from '../types/auth-data';
import { FilmStatus } from '../types/film-status';
import { Film, Films } from '../types/films';
import { Reviews } from '../types/reviews';
import { UserData } from '../types/user-data';
import { UserReview } from '../types/user-review';
import { redirectToRoute } from './action';
import { loadCurrentFilm, loadFilmReviews, loadFilms, loadFilmsLikeThis, loadPromoFilm, sendReview, setFavoriteFilms } from './film-data/film-data';
import { requireAuthorization } from './user-process/user-process';

export const fetchFilmsAction = createAsyncThunk(
  'data/fetchFilms',
  async () => {
    try {
      const {data} = await api.get<Films>(Server.Films);
      store.dispatch(loadFilms(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const fetchPromoFilmAction = createAsyncThunk(
  'data/fetchPromoFilm',
  async () => {
    try {
      const {data} = await api.get<Film>(Server.PromoFilm);
      store.dispatch(loadPromoFilm(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const fetchCurrentFilmAction = createAsyncThunk(
  'data/fetchCurrentFilm',
  async (filmId: string) => {
    try {
      const {data} = await api.get<Film>(`${Server.Films}/${filmId}`);
      store.dispatch(loadCurrentFilm(data));
    } catch (error) {
      errorHandle(error);
      store.dispatch(redirectToRoute(AppRoute.Error));
    }
  },
);

export const setFilmFavoriteAction = createAsyncThunk(
  'data/setFilmFavorite',
  async ({filmId, status, isPromo}: FilmStatus) => {
    try {
      await api.post<number>(`${Server.Favorite}/${filmId}/${status}`);
      if (!isPromo) {
        store.dispatch(fetchCurrentFilmAction(filmId));
      } else {
        store.dispatch(fetchPromoFilmAction());
      }
    } catch (error) {
      errorHandle(error);
      store.dispatch(redirectToRoute(AppRoute.Error));
    }
  },
);

export const fetchFavoriteFilmsAction = createAsyncThunk(
  'data/fetchFavoriteFilms',
  async () => {
    try {
      const {data} = await api.get<Films>(Server.Favorite);
      store.dispatch(setFavoriteFilms(data));
    } catch (error) {
      errorHandle(errorHandle);
    }
  },
);

export const fetchFilmsLikeThisAction = createAsyncThunk(
  'data/fetchFilmsLikeThis',
  async (filmId: string) => {
    try {
      const {data} = await api.get<Films>(`${Server.Films}/${filmId}/similar`);
      store.dispatch(loadFilmsLikeThis(data));
    } catch (error) {
      errorHandle(error);
      store.dispatch(redirectToRoute(AppRoute.Error));
    }
  },
);

export const fetchFilmReviewsAction = createAsyncThunk(
  'data/fetchFilmReviews',
  async (filmId: string) => {
    try {
      const {data} = await api.get<Reviews>(`${Server.Reviews}/${filmId}`);
      store.dispatch(loadFilmReviews(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const fetchReviewAction = createAsyncThunk(
  'data/fetchReview',
  async ({rating, comment, filmId}: UserReview) => {
    try {
      await api.post<UserReview>(`${Server.Reviews}/${filmId}`, {rating, comment});
      store.dispatch(sendReview(false));
      store.dispatch(redirectToRoute(`films/${filmId}`));
    }
    catch(error) {
      store.dispatch(sendReview(false));
      errorHandle(error);
    }
  },
);

export const checkAuthAction = createAsyncThunk(
  'user/checkAuth',
  async () => {
    try {
      await api.get(Server.Login);
      store.dispatch(requireAuthorization(AuthorizationStatus.Auth));
    }
    catch(error) {
      errorHandle(error);
      store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const loginAction = createAsyncThunk(
  'user/login',
  async ({login: email, password}: AuthData) => {
    try {
      const {data: {token}} = await api.post<UserData>(Server.Login, {email, password});
      saveToken(token);
      store.dispatch(requireAuthorization(AuthorizationStatus.Auth));
      store.dispatch(redirectToRoute(AppRoute.Main));
    }
    catch(error) {
      errorHandle(error);
      store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const logoutAction = createAsyncThunk(
  'user/logout',
  async () => {
    try {
      await api.delete(Server.Logout);
      dropToken();
      store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
    catch (error) {
      errorHandle(error);
    }
  },
);
