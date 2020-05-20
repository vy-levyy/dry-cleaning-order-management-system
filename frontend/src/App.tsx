import React from 'react';
import store from './store';
import { Provider } from 'react-redux';
import Menu from './components/Menu';

const App: React.FunctionComponent = () => {
  return (
    <Provider store={ store }>
      <Menu />;
    </Provider>
  );
}

export default App;
