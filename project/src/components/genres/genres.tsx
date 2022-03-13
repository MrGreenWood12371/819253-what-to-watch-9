import { useAppDispatch, useAppselector } from '../../hooks';
import { changeGenre, resetMaxFilms } from '../../store/film-process/film-process';
import { Genre } from '../../types/genres';

type GenresProps = {
  genre: Genre;
}

function Genres({genre}: GenresProps) {
  const dispatch = useAppDispatch();
  const {films} = useAppselector(({DATA}) => DATA);

  const genres: string[] = Array.from(new Set(films.map((film) => film.genre)));

  return (
    <ul className="catalog__genres-list">
      <li className={`catalog__genres-item ${genre === 'All genres' ? 'catalog__genres-item--active' : ''}`}>
        <span
          className="catalog__genres-link"
          style={{'cursor': 'pointer'}}
          onClick={() => {
            dispatch(changeGenre('All genres'));
            dispatch(resetMaxFilms());
          }}
        >
          All genres
        </span>
      </li>
      {
        genres.map((el) => (
          <li
            key={el}
            className={`catalog__genres-item ${genre === el ? 'catalog__genres-item--active' : ''}`}
          >
            <span
              className="catalog__genres-link"
              style={{'cursor': 'pointer'}}
              onClick={() => {
                dispatch(changeGenre(el));
                dispatch(resetMaxFilms());
              }}
            >
              {el}
            </span>
          </li>
        ))
      }
    </ul>
  );
}

export default Genres;
