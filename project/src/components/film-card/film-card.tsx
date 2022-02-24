import { Link } from 'react-router-dom';
import { Film } from '../../types/films';

type FilmCardProps = {
  film: Film;
  onHover: (cardId: number) => void;
}

function FilmCard(props: FilmCardProps) {
  const {film, onHover} = props;
  const {name, posterImage, id} = film;
  return (
    <article
      onMouseOver={
        () => {onHover(id);}
      }
      className="small-film-card catalog__films-card"
    >
      <div className="small-film-card__image">
        <img src={posterImage} alt={name} width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`/films/${id}`}>{name}</Link>
      </h3>
    </article>
  );
}

export default FilmCard;
