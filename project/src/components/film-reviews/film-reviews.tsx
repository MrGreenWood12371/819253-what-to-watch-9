import { useAppselector } from '../../hooks';

function FilmReviews() {

  const {filmReviews} = useAppselector(({DATA}) => DATA);

  return (
    <div className='film-card__reviews film-card__row'>
      <div className="film-card__reviews-col">
        {
          filmReviews.map((el, id) => {
            if (id % 2 === 1) {
              return null;
            }

            return (
              <div key={el.id} className="review">
                <blockquote className="review__quote">
                  <p className="review__text">{el.comment}</p>

                  <footer className="review__details">
                    <cite className="review__author">{el.user.name}</cite>
                    <time className="review__date" dateTime="2016-12-24">{el.date}</time>
                  </footer>
                </blockquote>

                <div className="review__rating">{el.rating}</div>
              </div>
            );
          })
        }
      </div>

      <div className="film-card__reviews-col">
        {
          filmReviews.map((el, id) => {
            if (id % 2 === 0) {
              return null;
            }

            return (
              <div key={el.id} className="review">
                <blockquote className="review__quote">
                  <p className="review__text">{el.comment}</p>

                  <footer className="review__details">
                    <cite className="review__author">{el.user.name}</cite>
                    <time className="review__date" dateTime="2016-12-24">{el.date}</time>
                  </footer>
                </blockquote>

                <div className="review__rating">{el.rating}</div>
              </div>
            );
          })
        }
      </div>
    </div>
  );
}

export default FilmReviews;
