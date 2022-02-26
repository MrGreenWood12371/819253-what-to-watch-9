import { useState } from 'react';
import { Films } from '../../types/films';
import FilmCard from '../film-card/film-card';

type FilmCardsProps = {
  films: Films;
}

function FilmCards({films}: FilmCardsProps) {
  const [activeCard, setActiveCard] = useState(0);
  const [isActive, setIsActive] = useState(false);

  function cardHoverHandler(cardId: number) {
    setActiveCard(cardId);
    setIsActive(cardId !== 0);
  }

  return (
    <div className="catalog__films-list">
      {
        films.map((film) => {
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
