import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import SignInScreen from '../../pages/sign-in/sign-in-screen/sign-in-screen';
import MyListScreen from '../../pages/my-list-screen/my-list-screen';
import MoviePageScreen from '../../pages/movie-page/movie-page-screen/movie-page-screen';
import ReviewFormScreen from '../../pages/review-form-screen/review-form-screen';
import PlayerScreen from '../../pages/player/player-screen/player-screen';
import MainPageScreen from '../../pages/main-page-screen/main-page-screen';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import PrivateRoute from '../private-route/private-route';

type AppScreenProps = {
  movieTitle: string;
  movieGenre: string;
  startDate: string;
}

function App({movieTitle, movieGenre, startDate}: AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={
            <MainPageScreen
              movieTitle={movieTitle}
              movieGenre={movieGenre}
              startDate={startDate}
            />
          }
        />
        <Route
          path={AppRoute.Login}
          element={<SignInScreen/>}
        />
        <Route
          path={AppRoute.MyList}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
              <MyListScreen/>
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Film}
          element={<MoviePageScreen/>}
        />
        <Route
          path={AppRoute.ReviewForm}
          element={<ReviewFormScreen/>}
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
    </BrowserRouter>
  );
}

export default App;
