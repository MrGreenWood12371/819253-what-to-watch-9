import { useAppDispatch } from '../../hooks';
import { addFilms } from '../../store/action';

function ShowMoreButton() {
  const dispatch = useAppDispatch();

  return (
    <div className="catalog__more">
      <button
        onClick={() => {
          dispatch(addFilms());
        }}
        className="catalog__button"
        type="button"
      >
        Show more
      </button>
    </div>
  );
}

export default ShowMoreButton;
