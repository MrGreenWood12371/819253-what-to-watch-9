import { useState, ChangeEvent, Fragment } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppselector } from '../../hooks';
import { sendReview } from '../../store/film-data/film-data';
import { fetchReviewAction } from '../../store/api-actions';
import { ratingStars } from './data/data';

function ReviewForm() {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');

  const param = useParams();
  const dispatch = useAppDispatch();
  const {isReviewSending} = useAppselector(({DATA}) => DATA);

  return (
    <form
      action="#"
      className="add-review__form"
      onSubmit={(evt) => {
        evt.preventDefault();
        dispatch(sendReview(true));
        dispatch(
          fetchReviewAction({
            rating: rating,
            comment: review,
            filmId: param.id as string,
          }),
        );
      }}
    >
      <div className="rating">
        <div className="rating__stars">
          {ratingStars.map((value, id) => (
            <Fragment key={value}>
              <input
                disabled={isReviewSending}
                className="rating__input"
                id={`star-${value}`}
                type="radio"
                name="rating"
                value={`${value}`}
                checked={rating === + value}
                onChange={({target}: ChangeEvent<HTMLInputElement>) => {
                  setRating(+target.value);
                }}
              />
              <label className="rating__label" htmlFor={`star-${value}`}>Rating {value}</label>
            </Fragment>
          ))}
        </div>
      </div>

      <div className="add-review__text">
        <textarea
          disabled={isReviewSending}
          className="add-review__textarea"
          name="review-text" id="review-text"
          placeholder="Review text"
          value={review}
          onChange={({target}) => {
            setReview(target.value);
          }}
        />
        <div className="add-review__submit">
          <button
            className="add-review__btn"
            type="submit"
            disabled={review.length < 50 || review.length > 400 || !rating || isReviewSending}
          >
            Post
          </button>
        </div>

      </div>
    </form>
  );
}

export default ReviewForm;
