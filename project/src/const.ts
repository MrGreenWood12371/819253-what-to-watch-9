export enum AppRoute  {
  Main = '/',
  Login = '/login',
  MyList = '/myList',
  Film = '/films/:id',
  ReviewForm = '/films/:id/review',
  Player = '/player/:id'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN'
}

export enum FilmsOnPage {
  MaxPerStep = '8',
  Initial = '8'
}

export const PREVIEW_TIMEOUT = 1000;
