export enum AppRoute  {
  Main = '/',
  Login = '/login',
  MyList = '/myList',
  Film = '/films/:id',
  ReviewForm = '/films/:id/review',
  Player = '/player/:id',
  Error = '*',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum FilmsOnPage {
  MaxPerStep = '8',
  Initial = '8',
}

export enum Server {
  Timeout = '5000',
  Url = 'https://9.react.pages.academy/wtw',
  Films = '/films',
  PromoFilm = '/promo',
  Reviews = '/comments',
  Favorite = '/favorite',
  Login = '/login',
  Logout = '/logout',
}

export enum HTTP_CODE {
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  NOT_FOUND = 404,
}

export enum NameSpace {
  film = 'FILM',
  data = 'DATA',
  user = 'USER',
}

export const PREVIEW_TIMEOUT = 1000;

export enum REVIEW_SETTINGS {
  MIN_LENGTH = 50,
  MAX_LENGTH = 400,
}
