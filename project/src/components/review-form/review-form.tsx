import { useState, ChangeEvent, Fragment } from 'react';

function ReviewForm() {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');

  const stars: number[] = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

  return (
    <form action="#" className="add-review__form">
      <div className="rating">
        <div className="rating__stars">
          {stars.map((value, id) => (
            <Fragment key={value}>
              <input
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
          className="add-review__textarea"
          name="review-text" id="review-text"
          placeholder="Review text"
          value={review}
          onChange={({target}) => {
            setReview(target.value);
          }}
        />
        <div className="add-review__submit">
          <button className="add-review__btn" type="submit">Post</button>
        </div>

      </div>
    </form>
  );
}

export default ReviewForm;
