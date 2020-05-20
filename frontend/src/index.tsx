import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/js/dist/util.js.map'
import { Provider } from 'react-redux';
import store from './store';

activateTooltips();
activateDropDown();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={ store }>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

function activateTooltips() {
  $(function () {
    $('[data-toggle="tooltip"]').tooltip();
  });
}

function activateDropDown() {
  $('.dropdown-toggle').dropdown();
}
