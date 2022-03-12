import { useEffect } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import FilmCards from '../../../components/film-cards/film-cards';
import Logo from '../../../components/logo/logo';
import Tabs from '../../../components/tabs/tabs';
import UserBlock from '../../../components/user-block/user-block';
import { AuthorizationStatus } from '../../../const';
import { useAppselector } from '../../../hooks';
import { store } from '../../../store';
import { fetchCurrentFilmAction, fetchFilmReviewsAction, fetchFilmsLikeThisAction } from '../../../store/api-actions';
import { Film } from '../../../types/films';

function MoviePageScreen() {

  const authorizationStatus = useAppselector((state) => state.authorizationStatus);

  const params = useParams();

  useEffect(() => {
    store.dispatch(fetchCurrentFilmAction(params.id as string));
    store.dispatch(fetchFilmsLikeThisAction(params.id as string));
    store.dispatch(fetchFilmReviewsAction(params.id as string));
  }, [params.id]);

  const film = useAppselector((state) => state.currentFilm);
  const films = useAppselector((state) => state.filmsLikeThis);

  const {id, name, genre, released, posterImage, backgroundImage} = film as Film;
  const navigate = useNavigate();


  return (
    <>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={backgroundImage} alt="The Grand Budapest Hotel" />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header film-card__head">
            <Logo/>

            <UserBlock/>
          </header>

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{genre}</span>
                <span className="film-card__year">{released}</span>
              </p>

              <div className="film-card__buttons">
                <button onClick={() => navigate(`/player/${id}`)} className="btn btn--play film-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                </button>
                {authorizationStatus === AuthorizationStatus.Auth ?
                  <Link to={'./review'} className="btn film-card__button">Add review</Link>
                  : null}
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={posterImage} alt={name} width="218" height="327" />
            </div>

            <div className="film-card__desc">
              <nav className="film-nav film-card__nav">
                <Tabs/>
              </nav>
              <Outlet/>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <FilmCards films={films.filter((el) => el.name !== name)}/>
        </section>

        <footer className="page-footer">
          <div className="logo">
            <a href="main.html" className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default  MoviePageScreen;
