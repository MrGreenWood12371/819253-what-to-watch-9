import { store } from '../../store';
import { setFilmFavoriteAction } from '../../store/api-actions';

type MyListButtonProps =  {
  filmId: string;
  isFavorite: boolean;
  isPromo: boolean;
}

function MyListButton({filmId, isFavorite, isPromo}: MyListButtonProps) {
  const status: number = isFavorite ? 0 : 1;

  return (
    <button onClick={() => {
      store.dispatch(setFilmFavoriteAction({filmId, status, isPromo}));
    }} className="btn btn--list film-card__button" type="button"
    >
      {
        !isFavorite ?
          <svg viewBox="0 0 19 20" width="19" height="20">
            <use xlinkHref="#add"></use>
          </svg>
          :
          <svg viewBox="0 0 18 14" width="18" height="14">
            <use xlinkHref="#in-list"></use>
          </svg>
      }
      <span>My list</span>
    </button>
  );
}

export default MyListButton;
