import { useAppDispatch } from '../../hooks';
import { changeGenre } from '../../store/action';
import { Genre } from '../../types/genres';
import { genres } from './data/data';

type GenresProps = {
  genre: Genre;
}

function Genres({genre}: GenresProps) {
  const dispatch = useAppDispatch();

  return (
    <ul className="catalog__genres-list">
      <li className={`catalog__genres-item ${genre === 'All genres' ? 'catalog__genres-item--active' : ''}`}>
        <span
          className="catalog__genres-link"
          style={{'cursor': 'pointer'}}
          onClick={() => {
            dispatch(changeGenre('All genres'));
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
