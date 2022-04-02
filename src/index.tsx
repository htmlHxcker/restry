import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import ReactModal from 'react-modal';
import './styles/main.scss';
import App from './App';

ReactModal.setAppElement('#root');

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root'),
);
