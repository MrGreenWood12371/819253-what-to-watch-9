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
import { Films, Film } from '../../types/films';
import { promoFilm } from '../../mocks/promo-film';
import FilmOverview from '../film-overview/film-overview';
import FilmDetails from '../film-details/film-details';
import FilmReviews from '../film-reviews/film-reviews';
import { Reviews } from '../../types/reviews';
import { filmReviews } from '../../mocks/film-reviews';

type AppScreenProps = {
  films: Films;
}

function App({films}: AppScreenProps): JSX.Element {
  const [firstFilm] = films;

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={
            <MainPageScreen
              promoFilm={promoFilm}
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
            <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
              <MyListScreen films={films}/>
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Film}
          element={<MoviePageScreen film={firstFilm as Film} films={films}/>}
        >
          <Route index element={<FilmOverview film={firstFilm as Film}/>}/>
          <Route path='details' element={<FilmDetails film={firstFilm as Film}/>}/>
          <Route path='reviews' element={<FilmReviews filmReviews={filmReviews as Reviews}/>}/>
        </Route>
        <Route
          path={AppRoute.ReviewForm}
          element={<ReviewFormScreen film={firstFilm as Film}/>}
        />
        <Route
          path={AppRoute.Player}
          element={<PlayerScreen film={firstFilm as Film}/>}
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
