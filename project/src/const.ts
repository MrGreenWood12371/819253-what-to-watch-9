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
