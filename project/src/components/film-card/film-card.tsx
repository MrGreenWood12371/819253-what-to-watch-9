import { Link } from 'react-router-dom';
import { Film } from '../../types/films';
import Player from '../player/player';

type FilmCardProps = {
  film: Film;
  onHover: (cardId: number) => void;
  isActive: boolean;
}

function FilmCard(props: FilmCardProps) {
  const {film, onHover, isActive} = props;
  const {name, id, posterImage, videoLink} = film;

  let playTimer: NodeJS.Timeout;

  return (
    <article
      onMouseEnter={
        () => {
          playTimer = setTimeout(() => {
            onHover(id);
          }, 1000);
        }
      }
      onMouseLeave={
        () => {
          clearTimeout(playTimer);
          onHover(0);
        }
      }
      className="small-film-card catalog__films-card"
    >
      <div className="small-film-card__image">
        <Player
          src={videoLink}
          posterImage={posterImage}
          isActive={isActive}
          isPreview
        />
      </div>
      <h3 className="small-film-card__title">
        <Link
          className="small-film-card__link"
          to={`/films/${id}`}
        >{name}
        </Link>
      </h3>
    </article>
  );
}

export default FilmCard;
