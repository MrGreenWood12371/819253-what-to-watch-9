import { Link } from 'react-router-dom';

function NotFoundScreen() {
  return (
    <div className="user-page">
      <section className="catalog" style={{marginBottom: 'auto', marginTop: 'auto'}}>
        <h2 className="catalog__title visually-hidden">Sorry, page not found. Code: 404</h2>

        <h2 className="film-card__title" style={{textAlign: 'center'}}>Sorry, page not found. Code: 404</h2>
        <Link to="/" className='user-block__link' style={{textAlign: 'center', marginTop: '20px'}}>Вернуться на главную</Link>
      </section>

      <footer className="page-footer">
        <div className="logo">
          <a href="main.html" className="logo__link logo__link--light">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </a>
        </div>

        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  );
}

export default NotFoundScreen;
