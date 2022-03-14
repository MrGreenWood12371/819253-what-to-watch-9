import { useState } from 'react';
import { filmTabs } from './data/data';
import FilmTab from './film-tab/film-tab';

function Tabs() {
  const [currentTab, setCurrentTab] = useState(0);

  return (
    <>
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          {
            filmTabs.map((el, id) => (
              <li
                className={`film-nav__item ${id === currentTab ? 'film-nav__item--active' : ''}`}
                key={el}
                onClick={() => {
                  setCurrentTab(id);
                }}
              >
                <a
                  href=''
                  onClick={(evt) => {
                    evt.preventDefault();
                  }}
                  className="film-nav__link"
                >
                  {el}
                </a>
              </li>
            ))
          }
        </ul>
      </nav>
      {FilmTab(currentTab)}
    </>
  );
}

export default Tabs;
