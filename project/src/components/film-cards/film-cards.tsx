import { useState } from 'react';
import { Films } from '../../types/films';
import { Genre } from '../../types/genres';
import FilmCard from '../film-card/film-card';

type FilmCardsProps = {
  films: Films;
  genre?: Genre;
}

function FilmCards({films, genre}: FilmCardsProps) {
  const [activeCard, setActiveCard] = useState(0);
  const [isActive, setIsActive] = useState(false);

  let currentFilms = films;

  if (genre && genre !== 'All genres') {
    currentFilms = films.filter((el) => el.genre === genre);
  }

  function cardHoverHandler(cardId: number) {
    setActiveCard(cardId);
    setIsActive(cardId !== 0);
  }

  return (
    <div className="catalog__films-list">
      {
        currentFilms.map((film) => {
          const keyValue = `film-${film.id}`;
          return (
            <FilmCard
              key={keyValue}
              film={film}
              onHover={cardHoverHandler}
              isActive={isActive && film.id === activeCard}
            />
          );
        })
      }
    </div>
  );
}

export default FilmCards;
