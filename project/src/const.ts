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
  ErrorTimeout = '2000',
  Url = 'https://9.react.pages.academy/wtw',
  Films = '/films',
  PromoFilm = '/promo',
  Reviews = '/comments',
  Login = '/login',
  Logout = '/logout',
}

export enum HTTP_CODE {
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  NOT_FOUND = 404,
}

export const PREVIEW_TIMEOUT = 1000;
