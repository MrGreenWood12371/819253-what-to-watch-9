import { useState } from 'react';
import { Link } from 'react-router-dom';
import { filmTabs } from './data/data';

function Tabs() {
  const [currentTab, setCurrentTab] = useState(0);

  return (
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
            <Link
              to={id === 0 ? './' : `./${el.toLowerCase()}`}
              className="film-nav__link"
            >
              {el}
            </Link>
          </li>
        ))
      }
    </ul>
  );
}

export default  Tabs;
