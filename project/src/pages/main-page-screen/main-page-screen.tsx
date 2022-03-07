import { useNavigate } from 'react-router-dom';
import FilmCards from '../../components/film-cards/film-cards';
import Genres from '../../components/genres/genres';
import Logo from '../../components/logo/logo';
import ShowMoreButton from '../../components/show-more-button/show-more-button';
import { AppRoute } from '../../const';
import { useAppselector } from '../../hooks';
import { Film } from '../../types/films';

type MainPageProps = {
  promoFilm: Film;
}

function MainPageScreen({ promoFilm}: MainPageProps) {
  const {name, genre, released, posterImage, backgroundImage, id} = promoFilm;
  const navigate = useNavigate();
  const initialFilms = useAppselector((state) => state.films);
  let currentFilms;
  const currentGenre = useAppselector((state) => state.genre);
  const maxFilmsOnPage = useAppselector((state) => state.maxFilms);

  if (currentGenre !== 'All genres') {
    currentFilms = initialFilms.filter((el) => el.genre === currentGenre);
  }
  else {
    currentFilms =  initialFilms;
  }

  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img src={backgroundImage} alt={name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header film-card__head">
          <Logo/>

          <ul className="user-block">
            <li className="user-block__item">
              <div className="user-block__avatar">
                <img onClick={() => navigate(AppRoute.MyList)} src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
              </div>
            </li>
            <li className="user-block__item">
              <a className="user-block__link">Sign out</a>
            </li>
          </ul>
        </header>

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src={posterImage} alt="The Grand Budapest Hotel poster" width="218" height="327" />
            </div>

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
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <Genres genre={currentGenre}/>

          <FilmCards films={currentFilms.length > maxFilmsOnPage ?
            currentFilms.slice(0, maxFilmsOnPage)
            : currentFilms}
          />

          {currentFilms.length > maxFilmsOnPage ? <ShowMoreButton/> : null}
        </section>

        <footer className="page-footer">
          <div className="logo">
            <a className="logo__link logo__link--light">
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

export default MainPageScreen;
