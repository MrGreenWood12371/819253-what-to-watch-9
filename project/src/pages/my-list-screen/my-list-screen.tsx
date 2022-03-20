import { useEffect } from 'react';
import FilmCards from '../../components/film-cards/film-cards';
import Logo from '../../components/logo/logo';
import UserBlock from '../../components/user-block/user-block';
import { useAppselector } from '../../hooks';
import { store } from '../../store';
import { fetchFavoriteFilmsAction } from '../../store/api-actions';

function MyListScreen() {

  useEffect(() => {
    store.dispatch(fetchFavoriteFilmsAction());
  }, []);

  const {favoriteFilms: films} = useAppselector(({DATA}) => DATA);

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo/>

        <h1 className="page-title user-page__title">My list</h1>

        <UserBlock/>
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <FilmCards films={films}/>
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
  );
}

export default MyListScreen;
