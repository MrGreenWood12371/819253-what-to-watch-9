import { useAppselector } from '../../hooks';
import FilmCards from '../film-cards/film-cards';
import Genres from '../genres/genres';
import ShowMoreButton from '../show-more-button/show-more-button';

function MainCatalog() {

  const {maxFilms: maxFilmsOnPage} = useAppselector(({FILM}) => FILM);
  const {genre: currentGenre} = useAppselector(({FILM}) => FILM);
  const {films: initialFilms} = useAppselector(({DATA}) => DATA);

  let currentFilms;

  if (currentGenre !== 'All genres') {
    currentFilms = initialFilms.filter((el) => el.genre === currentGenre);
  }
  else {
    currentFilms =  initialFilms;
  }

  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>

      <Genres genre={currentGenre}/>

      <FilmCards films={currentFilms.length > maxFilmsOnPage ?
        currentFilms.slice(0, maxFilmsOnPage)
        : currentFilms}
      />

      {currentFilms.length > maxFilmsOnPage ? <ShowMoreButton/> : null}
    </section>
  );
}

export default MainCatalog;
