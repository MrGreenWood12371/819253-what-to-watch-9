import { useAppselector } from '../../hooks';
import { Film } from '../../types/films';

function FilmOverview() {

  const {currentFilm: film} = useAppselector(({DATA}) => DATA);

  const {rating, scoresCount, director, starring, description} = film as Film;

  const setRating = (value: number) => {
    if (value >= 0 && value < 3) {
      return 'Bad';
    } else if (value >= 3 && value < 5) {
      return 'Normal';
    } else if (value >= 5 && value < 8) {
      return 'Good';
    } else if (value >= 8 && value < 10) {
      return 'Very good';
    } else {
      return 'Awesome';
    }
  };

  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">{rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{setRating(rating)}</span>
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
