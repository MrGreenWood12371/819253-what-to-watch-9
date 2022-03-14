import { createSlice } from '@reduxjs/toolkit';
import { FilmsOnPage, NameSpace } from '../../const';
import { FilmProcess } from '../../types/state';

const initialState: FilmProcess = {
  genre: 'All genres',
  maxFilms: +FilmsOnPage.Initial,
};

export const filmProcess = createSlice({
  name: NameSpace.film,
  initialState,
  reducers: {
    changeGenre: (state, action) => {
      state.genre = action.payload;
    },
    addFilms: (state) =>{
      state.maxFilms += +FilmsOnPage.MaxPerStep;
    },
    resetMaxFilms: (state) => {
      state.maxFilms = +FilmsOnPage.Initial;
    },
  },
});

export const {changeGenre, addFilms, resetMaxFilms} = filmProcess.actions;
