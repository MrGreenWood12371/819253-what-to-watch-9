import { Link, useNavigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppselector } from '../../hooks';

function UserBlock() {
  const navigate = useNavigate();
  const authorizationStatus  =  useAppselector((state) => state.authorizationStatus);

  return (
    <ul className="user-block">
      {
        authorizationStatus === AuthorizationStatus.Auth ?
          <>
            <li className="user-block__item">
              <div className="user-block__avatar">
                <img onClick={() => navigate(AppRoute.MyList)} src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
              </div>
            </li>
            <li className="user-block__item">
              <a className="user-block__link">Sign out</a>
            </li>
          </>
          :
          <li className="user-block__item">
            <Link to={AppRoute.Login} className="user-block__link">Sign in</Link>
          </li>
      }
    </ul>
  );
}

export default UserBlock;
