import { useState } from 'react';
import { Films } from '../../types/films';
import FilmCard from '../film-card/film-card';

type FilmCardsProps = {
  films: Films;
}

function FilmCards({films}: FilmCardsProps) {
  const [, setActiveCard] = useState(0);

  function cardHoverHandler(cardId: number) {
    setActiveCard(cardId);
  }

  return (
    <div className="catalog__films-list">
      {
        films.map((film) => {
          const keyValue = `${film.id}`;
          return (
            <FilmCard
              key={keyValue}
              film={film}
              onHover={cardHoverHandler}
            />
          );
        })
      }
    </div>
  );
}

export default FilmCards;
