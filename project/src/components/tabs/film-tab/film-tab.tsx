import FilmDetails from '../../film-details/film-details';
import FilmOverview from '../../film-overview/film-overview';
import FilmReviews from '../../film-reviews/film-reviews';

function FilmTab(tabId: number) {
  switch (tabId) {
    case 0:
      return  <FilmOverview/>;
    case 1:
      return <FilmDetails/>;
    case 2:
      return <FilmReviews/>;
  }
}

export default FilmTab;
