import { useAppselector } from '../../hooks';
import { Film } from '../../types/films';

function FilmOverview() {

  const {currentFilm: film} = useAppselector(({DATA}) => DATA);

  const {rating, scoresCount, director, starring, description} = film as Film;

  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">{rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">Very good</span>
          <span className="film-rating__count">{scoresCount}</span>
        </p>
      </div>

      <div className="film-card__text">
        {description}

        <p className="film-card__director"><strong>{director}</strong></p>

        <p className="film-card__starring"><strong>Starring: {starring}</strong></p>
      </div>
    </>
  );
}

export default FilmOverview;
