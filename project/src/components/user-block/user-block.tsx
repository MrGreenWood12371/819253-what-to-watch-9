import { Link, useNavigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppDispatch, useAppselector } from '../../hooks';
import { logoutAction } from '../../store/api-actions';

function UserBlock() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const {authorizationStatus}  =  useAppselector(({USER}) => USER);

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
              <Link
                to='./'
                onClick={(evt) => {
                  evt.preventDefault();
                  dispatch(logoutAction());
                }}
                className="user-block__link"
              >
                Sign out
              </Link>
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
