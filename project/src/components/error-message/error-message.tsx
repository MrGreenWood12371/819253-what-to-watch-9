import {useAppselector} from '../../hooks';

import './styles/style.css';

function ErrorMessage(): JSX.Element | null {
  const {error} = useAppselector((state) => state);

  if (error) {
    return (
      <div
        className='error-message'
      >
        {error}
      </div>
    );
  }

  return null;
}

export default ErrorMessage;
