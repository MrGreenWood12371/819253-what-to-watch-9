import { Routes, Route } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import SignInScreen from '../../pages/sign-in/sign-in-screen/sign-in-screen';
import MyListScreen from '../../pages/my-list-screen/my-list-screen';
import MoviePageScreen from '../../pages/movie-page/movie-page-screen/movie-page-screen';
import ReviewFormScreen from '../../pages/review-form-screen/review-form-screen';
import PlayerScreen from '../../pages/player/player-screen/player-screen';
import MainPageScreen from '../../pages/main-page-screen/main-page-screen';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import PrivateRoute from '../private-route/private-route';
import { useAppselector } from '../../hooks';
import LoadingScreen from '../../pages/loading-screen/loading-screen';
import HistoryRouter from '../history-router/history-router';
import browserHistory from '../../browser-history';


function App(): JSX.Element {
  const {authorizationStatus} = useAppselector(({USER}) => USER);

  const {isDataLoaded} = useAppselector(({DATA}) => DATA);

  if (authorizationStatus === AuthorizationStatus.Unknown || !isDataLoaded) {
    return (
      <LoadingScreen/>
    );
  }

  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={
            <MainPageScreen/>
          }
        />
        <Route
          path={AppRoute.Login}
          element={<SignInScreen/>}
        />
        <Route
          path={AppRoute.MyList}
          element={
            <PrivateRoute>
              <MyListScreen/>
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Film}
          element={<MoviePageScreen/>}
        >
        </Route>
        <Route
          path={AppRoute.ReviewForm}
          element={
            <PrivateRoute>
              <ReviewFormScreen/>
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Player}
          element={<PlayerScreen/>}
        />
        <Route
          path='*'
          element={<NotFoundScreen/>}
        />
      </Routes>
    </HistoryRouter>
  );
}

export default App;
