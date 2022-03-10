import { Navigate, RouteProps } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppselector } from '../../hooks';

type PrivateRouteProps = RouteProps & {
  children: JSX.Element;
}

function PrivateRoute(props: PrivateRouteProps) {
  const { children } = props;
  const {authorizationStatus} = useAppselector((state) => state);

  return (
    authorizationStatus === AuthorizationStatus.Auth
      ? children
      : <Navigate to={AppRoute.Login}/>
  );
}

export default PrivateRoute;
