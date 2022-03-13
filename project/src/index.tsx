import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/app/app';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { store } from './store';
import { checkAuthAction, fetchFilmsAction, fetchPromoFilmAction } from './store/api-actions';

store.dispatch(checkAuthAction());
store.dispatch(fetchFilmsAction());
store.dispatch(fetchPromoFilmAction());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ToastContainer/>
      <App/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
